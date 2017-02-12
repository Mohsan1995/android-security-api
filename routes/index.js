module.exports = (server) => {
    server.use('/contact', require('./contact')(server));
    server.use('/message', require('./message')(server));
};