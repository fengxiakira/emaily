const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

// create survey instance
const Survey = mongoose.model('surveys');

// user is logged in & have credits
// mayhave addtional routes in future
module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        // pull the properties
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            // title : title
            title,
            subject,
            body,
            // subdoc collection
            // email => {return {email : email}}
            // ()for shorten object
            // trim() delete extra white space
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()

        })

        // Great place to send an email 
        // survey contains the subject and recipients
        // the second is the body of the email
        const mailer = new Mailer(survey, surveyTemplate(survey));
    })
}