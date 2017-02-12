let router = require('express').Router();
module.exports = (server) => {
    router
        .get('/', function (req,res,next) {
            res.send("dkzapodkazpodkzaopdk")
        });

    return router;
};