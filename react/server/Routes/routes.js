const dataBase = require('./../Connections/connectionDB')()
let routes = {};
let server;

routes.configuraRotas = function (express) {
    server = express;
    routes.consultaDadosMotoboy();
};

routes.consultaDadosMotoboy = function () {
        server.get('/dados', async function (request, response) {
        try{
           const dados =  await dataBase.any("SELECT * FROM motoboy" )
            response.json(dados)
        } catch(ex){
            console.log("Erro ao efetuar a consulta " + ex)
        }
    });
};

module.exports = routes;


