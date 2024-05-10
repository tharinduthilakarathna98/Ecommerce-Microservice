const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/db_conn");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.use("/products", require("./routes/productRouter"));
app.use("/filter", require("./routes/filterRouter"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
