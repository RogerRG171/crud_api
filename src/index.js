const express = require("express");
const cors = require("cors");
const env = require("dotenv");

const port = process.env.PORT || 3001;

env.config();

const app = express();
app.use(cors());
app.use(express.json());

require("../src/routes/index")(app);

app.listen(port);

console.log(port);

const t = process.env.DATABASE_URL;
console.log(t);
