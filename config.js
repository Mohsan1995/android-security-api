const ENV = process.env.ENV ? process.env.ENV : "dev";

const IS_PROD = ENV == "prod";

const MYSQL = {
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "android-security-api",
    port     : 3306
};


module.exports = {
    MYSQL
};