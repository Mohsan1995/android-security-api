let Sequelize = require('sequelize');

module.exports = (server) => {

    const Message = server.models.squelize.define('message', {
        to: Sequelize.STRING,
        body: Sequelize.STRING,
    });

    Message.sync();

    return Message;
};