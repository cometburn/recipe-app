require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: [process.env.API, "http://127.0.0.1:3000", "http://localhost:3000"],
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())

let fixturesLoader = require('./db/fixtures/fixtures');
fixturesLoader.loadFixtures()


const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes);


app.listen(PORT, '127.0.0.1', () => { console.log('Server Started on Port: ' + PORT) })