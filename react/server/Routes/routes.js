let routes = {};
let server;

routes.configuraRotas = function (express) {
    server = express;
    routes.teste();
};

routes.teste = function ()  {
    server.route("/api/dados").get((request, response) => response.send("Funcionou"));
};

module.exports = routes;


//const db = pgp(conection)

//d//b.query("select * from public.Motoboy")
//    .then(user =>{
//        console.log()
//    })
//    .catch(error => {
//        console.log("não conectou "  +error )
//    })
//
//const conection = {
//    host: 'localhost',
//    port: 5432,
//    database: 'DeskMoto',
//    user: 'wendel',
//    password: '214321'
//};


