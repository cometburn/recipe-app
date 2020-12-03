require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": "xxwvsuao",
        "password": "Ux7uSBIM6nKV6_nfZQR2Xkr7oyKdcFfF",
        "database": "xxwvsuao",
        "host": "arjuna.db.elephantsql.com",
        "dialect": "postgres",
        "logging": false,
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
