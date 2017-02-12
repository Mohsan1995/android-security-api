const Squelize    =   require("sequelize");

module.exports = (server) => {
    server.models = server.models || {};
    server.models.squelize = new Squelize(server.config.MYSQL.database, server.config.MYSQL.user, server.config.MYSQL.password);
    server.models.contact = require('./Contact')(server);
    server.models.message = require('./Message')(server);

};