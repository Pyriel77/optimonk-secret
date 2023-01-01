const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const moment = Date.now();
  console.log(method, url, moment);
  next();
};

module.exports = logger;
