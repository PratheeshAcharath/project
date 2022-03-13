const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const formRoute = require("./routes/student");
const bodyParser = require("body-parser");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to mongo"))
  .catch((error) => {
    console.log(error);
  });

app.use("/images", express.static("images"));

app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/idcard", formRoute);

app.listen("6000", () => {
  console.log("Server is running at port 6000");
});
