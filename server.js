const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3003;

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hii there");
// });
//connect to mongoose
mongoose.connect(
  "mongodb+srv://Omkar0035:Omkar%402000@cluster0.ljjo4kx.mongodb.net/salesData"
);
//connect to mongoose
//require routs
app.use("/", require("./routes/noteRoutes")); //ready to send

//require routs

app.listen(port, (req, res) => {
  console.log(`you are live at http://localhost:${port}`);
});
