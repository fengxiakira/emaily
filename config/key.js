// key.js - figure out what set of credentials to return 
// in production or dev environment 
// run on heroku, process.env 自动变成production环境
// only backend server
if (process.env.NODE_ENV === 'production') {
    // in production, return prod key set
    module.exports = require('./prod');
} else {
    // in dev, return dev key set
    module.exports = require('./dev');
}
// front-end es2015 import...export,import必须在最前
// 所以就不能有上面这种切换模式
// back-end common js, require statements
