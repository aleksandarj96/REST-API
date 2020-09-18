const express = require('express')

module.exports = function ({ usersManager }) {
    const router = express.Router()

    router.get("/users", function (req, res) {
        usersManager.getAllUsers(function (errors, users) {
            if (errors) {
                res.status(400).end()
                return
            } else {
                res.status(201).json(users)
                return
            }
        })
    }),

    router.get("/users/:id", function (req, res){
        usersManager.getUserWithId(function (errors, user){
            if(errors){
                res.status(400).end()
                return
            }else{
                res.status(201).json(user)
                return
            }
        })
    })
    return router
}