module.exports = (server) => {
    return function(req,res,next){
        server.models.contact.create(req.body).then(function () {
            server.models.contact.findAll().then(function (contacts) {
                res.send(contacts)
            })
        });
    }
};