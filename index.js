const bodyParser  =   require('body-parser');
const express     =   require('express');
const config      =   require('./config');

// Webserver parameter
const PORT = process.env.PORT || 5555;

// Starting our webserver and putting it all together
const server     =   express();

// Middlewares
server.use(({method, url}, rsp, next) => {
    rsp.on('finish', () => {
        console.log(`${rsp.statusCode} ${method} ${url}`);
    });
});

server.use(bodyParser.json());
require('./models')(server);
require('./actions')(server);
require('./routes')(server);

server.listen(PORT);
console.log('Listening on :' + PORT + '...');