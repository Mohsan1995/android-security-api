module.exports = (server) => {
  return function(req,res,next){
    server.models.message.findAll().then( (message) => {
        res.send(message);
    });
  }
};