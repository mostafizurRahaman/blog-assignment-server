module.exports.errorHandler = async (err, req, res, next) => {
   console.log(err.message, err.name, err?.stack);
   res.status(500).send({
      status: "failed",
      message: err.message,
      name: err.name,
   });
};
