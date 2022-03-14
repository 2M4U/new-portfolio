const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3333;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
