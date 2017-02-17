const express     =   require('express');
const config      =   require('./config');
const morgan      =   require('morgan');
const busboy      =   require('connect-busboy');

// Webserver parameter
const PORT = process.env.PORT || 6666;

// Starting our webserver and putting it all together
const server     =   express();

server.use(busboy());
server.use(morgan('dev'));

server.config = config;


server.use(({method, url}, rsp, next) => {
    rsp.on('finish', () => {
        console.log(`${rsp.statusCode} ${method} ${url}`);
    });
    next();
});

require('./models')(server);
require('./middlewares')(server); // Load middlewares
require('./actions')(server);
require('./routes')(server);

server.listen(PORT);
console.log('Listening on :' + PORT + '...');
