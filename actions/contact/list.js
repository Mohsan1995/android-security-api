module.exports = (server) => {
  return function(req,res,next){
    server.models.contact.findAll().then( (contacts) => {
        res.send(contacts);
    });
  }
};