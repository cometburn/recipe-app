const express = require('express');
const router = express.Router();
const sequelize = require('sequelize')

const db = require('../db/models/index')
const User = require('../db/models/').user

const Op = sequelize.Op;

router.use(function timeLog(req, res, next) {
    next();
});

router.post('/login', (req, res) => {
    User.findOne({
        raw: true,
        where: {
            id: { [Op.username]: req.body.username }
        }
    }).then(result => {
        console.log(result);
        res.end(JSON.stringify(result.dataValues))
    }).catch(error => {
        res.sendStatus(400)
    })

});


module.exports = router;