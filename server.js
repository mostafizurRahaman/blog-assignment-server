const app = require("./app");
const { errorHandler } = require("./middleware/errorHandler.middleware");
const colors = require("colors");
const port = process.env.PORT || 8080;

//  database connection is here:

//  main Path:
app.get("/", (req, res, next) => {
   res.status(200).send({
      status: "success",
      message: "server is running now",
   });
});

//  app listen on port:
app.listen(port, () => {
   console.log(`server is running on port ${port}`.blue.bold);
});

//  global error handler:
app.use(errorHandler);
