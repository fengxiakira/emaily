const mongoose = require("mongoose");
const { Path } = require("path-parser");
const { URL } = require("url");
const { chain } = require("lodash");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

// create survey instance
const Survey = mongoose.model("surveys");

// user is logged in & have credits
// mayhave addtional routes in future
// after mail send, send survey to database
module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thank you for your feedback!");
  });

  // update survey
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    chain(req.body)
      .map(({ url, email }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  // add a post (instance)
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
      // extra url to add if user want to redirect to that link
    });

    // Great place to send an email
    // survey contains the subject and recipients
    // the second is the body of the email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      // save survey to database
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      // sendback update user model
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //  delete a post
  app.delete("/api/delete/:surveyId", requireLogin, async (req, res) => {
    await Survey.deleteOne({ _id: req.params.id });
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.send(surveys);
  });
};
