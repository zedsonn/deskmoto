const pgp = require('pg-promise')(/*options*/);
const cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'DeskMoto',
    user: 'wendel',
    password: '214321'
};    
const db = pgp(cn) // database instance;


module.exports = function(){
    return db;
}