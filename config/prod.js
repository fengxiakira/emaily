import { stripePublishableKey } from './dev';
// production keys here
module.exports = {
    // process environment varible
    googleClientID: process.env.GOOGLE_CLIENT_ID,

    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,

    mongoURI: process.env.MONGODB_URI,
    cookieKey: process.env.COOKIE_KEY,
    googleRedirectURI: 'https://survey-emaily-online.herokuapp.com',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY

};
