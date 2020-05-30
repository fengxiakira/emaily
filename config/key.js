// key.js - figure out what set of credentials to return 
// in production or dev environment 
// run on heroku, process.env 自动变成production环境
if (process.env.NODE_ENV === 'production') {
    // in production, return prod key set
    module.exports = require('./prod');
} else {
    // in dev, return dev key set
    module.exports = require('./dev');
}