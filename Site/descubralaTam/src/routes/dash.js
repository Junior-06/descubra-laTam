var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/inserirRespostas", function (req, res) {
    dashController.inserirRespostas(req, res);
});

router.get("/coletarDados/:idUsuarioServer", function(req,res){
    dashController.coletarDados(req,res)
});

module.exports = router;