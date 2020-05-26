// route handler
//app.get create a new route handler
// get watch for incoming requests with this method
// '/' show some particular route,地址
// req,request(incoming request)
// res,outgoing response
// res.send: send some JSON back to who ever made their request
// app.get('/', (req, res) => {
//     res.send({ hi: 'there' });
// });
// original passport
const passport = require('passport');

module.exports = (app) => {
    // route handler , passport to handle OAUTH autherntation flow
    app.get(
        // user come this route
        "/auth/google",
        //  "google" : GoogleStrategy
        passport.authenticate("google", {
            //   google access to, specific info of user account
            scope: ["profile", "email"]
        })
    );

    // route handler for /auth/google/callback
    // passport handle code,passport to see the code
    app.get("/auth/google/callback", passport.authenticate("google"));

}

