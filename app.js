var express = require('express')
var app = express()
const awilix = require('awilix')
const bodyParser = require("body-parser")

//users
const apiUsersRouter = require('./src/PL/routers/API/users-router')
const usersManager = require('./src/BLL/users-manager')
const usersRepository = require('./src/DAL/users-repository')

const container = awilix.createContainer()
//users
container.register('apiUsersRouter', awilix.asFunction(apiUsersRouter))
container.register('usersManager', awilix.asFunction(usersManager))
container.register('usersRepository', awilix.asFunction(usersRepository))

const theAPIRouter = container.resolve('apiUsersRouter')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", theAPIRouter)

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(8000, function () {
    console.log('Listening on port 8000!')
})

