module.exports = (server) => {
  return {
      list: require('./list')(server),
      //add:  require('./add')(server)
  }
};