const server = require("express")()
const routes = require('./Routes/routes')
const bodyParser = require("body-parser")

routes.configuraRotas(server);
server.listen(3000, () => {
    console.log('Deskmoto Server is Online... ... ...')
});