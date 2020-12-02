require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001;

app.use(express.json())

let fixturesLoader = require('./db/fixtures/fixtures');
fixturesLoader.loadFixtures()

app.listen(PORT, '127.0.0.1', () => { console.log('Server Started on Port: ' + PORT) })