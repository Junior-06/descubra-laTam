var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/publicarPost", function (req, res) {
    avisoController.publicarPost(req, res);
});
module.exports = router;