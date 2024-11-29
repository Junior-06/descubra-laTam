var database = require("../database/config");

function inserirRespostas(pergunta1, pergunta2,pergunta3,pergunta4,idUsuario) {
    var instrucaoSql = `insert into respostaUsuario (pergunta1, pergunta2,pergunta3,pergunta4,fkUsuario) values ("${pergunta1}","${pergunta2}","${pergunta3}","${pergunta4}",${idUsuario});`;
    
    return database.executar(instrucaoSql);
}

function coletarDados(idUsuario) {
    var instrucaoSql = `SELECT * FROM respostaUsuario WHERE fkUsuario = ${idUsuario} ORDER BY idTeste DESC LIMIT 1;`;
    
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirRespostas,
    coletarDados
};