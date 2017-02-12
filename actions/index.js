module.exports = (server) => {
    server.actions = server.actions || {};
    server.actions.contact = require('./contact')(server);
    server.actions.message = require('./message')(server);
};