var express = require('express')
var app = express()
const awilix = require('awilix')
const bodyParser = require("body-parser")

//users
const apiUsersRouter = require('./src/PL/routers/API/users-router')
const usersManager = require('./src/BLL/users-manager')
const usersRepository = require('./src/DAL/users-repository')

//entries
const apiEntryRouter = require('./src/PL/routers/API/entry-router')
const entryManager = require('./src/BLL/entry-manager')
const entryRepository = require('./src/DAL/entry-repository')

const container = awilix.createContainer()
//users
container.register('apiUsersRouter', awilix.asFunction(apiUsersRouter))
container.register('usersManager', awilix.asFunction(usersManager))
container.register('usersRepository', awilix.asFunction(usersRepository))

//entries
container.register('apiEntryRouter', awilix.asFunction(apiEntryRouter))
container.register('entryManager', awilix.asFunction(entryManager))
container.register('entryRepository', awilix.asFunction(entryRepository))

//routers
const theAPIUsersRouter = container.resolve('apiUsersRouter')
const theAPIEntryRouter = container.resolve('apiEntryRouter')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", theAPIUsersRouter)
app.use("/", theAPIEntryRouter)

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(8000, function () {
    console.log('Listening on port 8000!')
})

