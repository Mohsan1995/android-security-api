const Squelize    =   require("sequelize");

module.exports = (server) => {
    server.actions = server.actions || {};
    server.actions.squelize = new Squelize(server.config.MYSQL.database, server.config.MYSQL.username, server.config.MYSQL.password);
    //server.actions.contact = require('./contact')(server);
};