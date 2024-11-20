var database = require("../database/config");

function publicarPost(titulo, texto, idUsuario) {
    var instrucaoSql= `INSERT INTO post (titulo, texto, fkUsuario) VALUES ('${titulo}', '${texto}', ${idUsuario});`
    return database.executar(instrucaoSql);
}

module.exports = {
    publicarPost
}
