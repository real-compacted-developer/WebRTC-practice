var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
  console.log(__dirname + `/client.html`);
  res.sendFile(__dirname + '/client.html');
});

module.exports = router;
