const server = require("express")()
const routes = require('./Routes/routes')
const bodyParser = require("body-parser")
const cors = require("cors")

server.use(cors())

routes.configuraRotas(server);
server.listen(4000, () => {
    console.log('Deskmoto Server is Online... ... ...')
});