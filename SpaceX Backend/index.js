require("dotenv").config({ path: "./config/dot.env" });
const cors = require("cors");
const express = require("express");
const spacex = require("./routes/spacex");
const errorhandler = require("./middlewares/errorhandler");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", spacex);

// error middleware to handle errors
app.use(errorhandler);

app.listen(8081, () => {
  console.log("Server Started");
});
