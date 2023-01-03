const express = require("express");
const cors = require("cors");
const env = require("dotenv");

env.config();

const app = express();
app.use(cors());
app.use(express.json());

require("../src/routes/index")(app);

app.listen(3001);

console.log("http://localhost:3001");
