const router = require('express').Router();
module.exports = (server) => {
    router
        .get('/', server.middlewares.bodyparser, server.actions.contacts.list);

    return router;
}