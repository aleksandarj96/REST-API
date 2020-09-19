const express = require('express')

module.exports = function ({ usersManager }) {
    const router = express.Router()

    router.get("/users", function (req, res) {
        usersManager.getAllUsers(function (errors, users) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(users)
                return
            }
        })
    }),

        router.get("/users/usernames/:username", function (req, res) {
            const username = req.params.username
            usersManager.getUserByUsername(username, function (errors, user) {
                if (errors) {
                    res.status(404).json(errors)
                    return
                } else {
                    res.status(201).json(user)
                    return
                }
            })
        }),

        router.get("/users/:id", function (req, res) {
            const id = req.params.id
            usersManager.getUserWithId(id, function (errors, user) {
                if (errors) {
                    res.status(404).json(errors)
                    return
                } else {
                    res.status(201).json(user)
                    return
                }
            })
        }),

        router.post("/users", function (req, res) {
            const username = req.body.username
            const password = req.body.password
            usersManager.createUser(username, password, function (errors, newUser) {
                if (errors) {
                    res.status(404).json(errors)
                    return
                } else {
                    res.status(201).json(newUser)
                    return
                }
            })
        }),

        router.delete("/users/usernames/:username", function (req, res) {
            const username = req.params.username
            usersManager.deleteUser(username, function (errors, deletedUser) {
                if (errors) {
                    res.status(404).json(errors)
                    return
                } else {
                    res.status(201).json("deleted user: " + deletedUser.username)
                    return
                }
            })
        })

    return router
}