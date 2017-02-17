let Sequelize = require('sequelize');

module.exports = (server) => {

    const Message = server.models.squelize.define('call-log', {
        number: Sequelize.STRING,
        date: Sequelize.STRING,
        duration: Sequelize.STRING,
        type: Sequelize.STRING
    });

    Message.sync();

    return Message;
};
