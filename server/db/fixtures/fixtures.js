'use strict';

const sequelize_fixtures = require('sequelize-fixtures');

const models = require("../models");

var fixtures = [
    {
        "model": "user",
        "data": {
            "username": "root",
            "password": "$2b$10$GM.f/0LSmcCgMiBoWkNtKuk.fiw50PYl81r5d1Aflk.5.Y.W.aITq", //test123
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
