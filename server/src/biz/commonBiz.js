// Generated by CoffeeScript 1.11.1
(function() {
  var db;

  db = require('./../libs/db');

  module.exports = {
    setUserInfo: function(req, res, next) {
      var token;
      token = req.headers['x-token'];
      return db.users.findOne({
        token: token,
        expiredTime: {
          $gt: Date.now()
        }
      }, function(err, user) {
        if (!err) {
          req.userInfo = user;
        }
        return next();
      });
    },
    validateUserinfo: function(req, res, next) {
      if (!req.userInfo) {
        res.status(401);
        return res.send('未授权');
      }
      return next();
    }
  };

}).call(this);

//# sourceMappingURL=commonBiz.js.map
