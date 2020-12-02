const express = require('express');
const router = express.Router();
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')

const db = require('../db/models/index')
const Employee = require('../db/models/').employee
const Role = require('../db/models/').role
const Profile = require('../db/models/').employee_profile
const Position = require('../db/models/').position

const token = require('../utils/token')

const Op = sequelize.Op;

router.use(function timeLog(req, res, next) {
    next();
});

router.post('/login', (req, res) => {

});


module.exports = router;