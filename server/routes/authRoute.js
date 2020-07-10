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
    //  passport.authenticate("google") is a middleware
    // it takes incoming request, authenticate user,it then pass the request to the next middleware
    // 主要是authenticate处理完，产生的request 没有 handler接
    // need another route/request handler
    app.get("/auth/google/callback",
        passport.authenticate("google"),
        // pass the req to next handler
        // deal with req then redirect to '/surveys'
        (req, res) => {
            res.redirect("/surveys");
        }

    );

    // Log our handler 
    app.get('/api/logout', (req, res) => {
        req.logout();
        // notify user, return underfined/nothing
        // res.send(req.user);
        // redirect to the root 
        res.redirect('/')
    });

    // use model instance added to req object as 'req.user'
    app.get('/api/current_user', (req, res) => {
        // get access to user, return a user instance
        res.send(req.user);
    });
}

