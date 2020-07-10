const key = require('../config/key');
const stripe = require('stripe')(
    // "sk_test_51GzsWeK6iSuO9uQYsYnSjhJS7VAgnmCDqnlVosjkJsDeTmeXUABY4xxJpPpV4x7YDsF9zkaGQQxLXBK0AO7PNNic00laBCeUR8"
    key.stripeSecretKey
);
const requireLogin = require('../middlewares/requireLogin')
module.exports = app => {

    //   set route handler, post request to api/stripe
    // post request with the token
    // this returns a promise
    app.post('/api/stripe', requireLogin, async (req, res) => {
        // req.body is the req parsed by body-parser
        const charge = await stripe.charges.create({
            // notion at backend, front-end is authorition
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            // the request id of the card user input at the front end
            source: req.body.id
        })

        // get the reference to the current user model(req.user), by passport
        req.user.credits += 5;
        // save the user model, 这里的user是最新的，从db里获得的
        // 完全不同的memory location
        const user = await req.user.save();
        // response
        res.send(user);
    });


};

