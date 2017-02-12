const router = require('express').Router();
module.exports = (server) => {
    router
        .get('/', server.middlewares.bodyparser, server.actions.message.list);
    router
        .post('/', server.middlewares.bodyparser, server.actions.message.add);

    return router;
};