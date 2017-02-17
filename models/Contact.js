let Sequelize = require('sequelize');

module.exports = (server) => {

    const Contact = server.models.squelize.define('contact', {
        name: Sequelize.STRING,
        number: Sequelize.STRING,
        email: Sequelize.STRING
    });

    Contact.sync();

    return Contact;
};
