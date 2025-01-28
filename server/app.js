const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use("/graphql", (req, res, next) => {
  res.send("Hello World");
});

app.listen(8080);
