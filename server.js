const express = require("express");
const hbrs = require("express-handlebars");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbrs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.use(require("./controllers"));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
