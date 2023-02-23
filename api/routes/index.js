var express = require("express");
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get("/", function (req, res, next) {
  res.send("API is working properly!");
=======
router.get('/', function (req, res, next) {
  res.send('API is working properly!');
>>>>>>> main
});

module.exports = router;
