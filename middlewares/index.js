module.exports = (server) => {
    server.middlewares = server.middlewares || {};
    server.middlewares.bodyparser = require('body-parser').json();
}