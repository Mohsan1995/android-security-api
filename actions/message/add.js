module.exports = (server) => {
    return function(req,res,next){
        server.models.message.create(req.body).then(function () {
            server.models.message.findAll().then(function (messages) {
                res.send(messages)
            })
        });
    }
};