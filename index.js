const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
dotenv.config();


mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("DBConnect Succesfull"))
  .catch((err) => {
    console.log(err);
  });


app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.get("/home", (req, res) => {
  res.send("datos del home");
});



app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running!`);
});
