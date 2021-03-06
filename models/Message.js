let Sequelize = require('sequelize');

module.exports = (server) => {

    const Message = server.models.squelize.define('message', {
        number: Sequelize.STRING,
        body: Sequelize.STRING,
        date: Sequelize.STRING,
        type: Sequelize.STRING
    });

    Message.sync();

    return Message;
};
