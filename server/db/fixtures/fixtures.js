'use strict';

const sequelize_fixtures = require('sequelize-fixtures');

const models = require("../models");

var fixtures = [
    {
        "model": "user",
        "data": {
            "username": "root",
            "password": "test123",
        }
    }
];

module.exports = {
    loadFixtures: () => {
        sequelize_fixtures.loadFixtures(fixtures, models).then(() => {
            console.log("Fixtures have been loaded, check your database tables!!");
        }).catch((err) => {
            console.log(err)
        })
    }
};
