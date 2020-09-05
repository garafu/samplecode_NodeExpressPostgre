var router = require("express").Router();
var client = require("../db/client.js");

router.get("/", (req, res) => {
  res.render("./index.ejs");
});

router.get("/search", async (req, res) => {
  var data, pass;
  var key = req.query.key;
  if (key) {
    data = await client.executeQuery("SELECT_USER", [key]);
    pass = data.rowCount > 0 ? data.rows[0].pass : "";
  }
  res.render("./index.ejs", { key, pass });
});

module.exports = router;