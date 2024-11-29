var dashModel = require("../models/dashModel");

function inserirRespostas(req, res) {
    var pergunta1 = req.body.pergunta1Server;
    var pergunta2 = req.body.pergunta2Server;
    var pergunta3 = req.body.pergunta3Server;
    var pergunta4 = req.body.pergunta4Server;
    var idUsuario = req.body.idUsuarioServer;

    dashModel.inserirRespostas(pergunta1, pergunta2,pergunta3,pergunta4,idUsuario)
        .then((resultadoAutenticar) => {
            console.log(resultadoAutenticar);
        }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function coletarDados(req, res) {
    var idUsuario = req.params.idUsuarioServer;

    dashModel.coletarDados(idUsuario)
        .then((resultadoAutenticar) => {
            console.log(resultadoAutenticar);
            res.status(200).json(resultadoAutenticar);
        }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    inserirRespostas,
    coletarDados
}