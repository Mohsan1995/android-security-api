const router = require('express').Router();
module.exports = (server) => {
    router
        .get('/', server.middlewares.bodyparser, server.actions.contact.list);
    router
        .post('/', server.middlewares.bodyparser, server.actions.contact.add);

    return router;
};
