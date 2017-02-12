module.exports = (server) => {
    server.use('/home', require('./home')(server));
    server.use('/contact', require('./contact')(server));
};