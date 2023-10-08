const express = require("express");
const cors = require("cors");
require("dotenv").config();
//  require routes:
const blogRouter = require("./routes/blog.route");
//  create app:
const app = express();

//  use middleware:
app.use(cors());
app.use(express.json());

//  use route middleware:
app.use("/api", blogRouter);

//  export app :

module.exports = app;
