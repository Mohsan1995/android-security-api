module.exports = (server) => {
  return {
      list: require('./list')(server)
  }
};