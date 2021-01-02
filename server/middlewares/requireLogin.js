// export a function
// next, next middleware(request handler) in the chain when this
// middleware completed
// reuseble function
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in" });
  }

  next();
};
