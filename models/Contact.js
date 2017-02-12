let Sequelize = require('sequelize');

module.exports = (server) => {

    let Contact = server.models.squelize.define('contact', {
        name: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        mobile: Sequelize.STRING,
        telephone: Sequelize.STRING,
        email: Sequelize.STRING
    });

    Contact.sync();

    return Contact;
};