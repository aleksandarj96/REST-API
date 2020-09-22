const express = require('express')

module.exports = function ({ entryManager }) {
    const router = express.Router()

    router.get("/entries", function (req, res) {
        entryManager.getAllEntries(function (errors, entries) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(entries)
                return
            }
        })

    })

    router.get("/entries/userid/:id", function (req, res) {
        const userId = req.body.userId
        entryManager.getEntriesWithUserId(userId, function (errors, entries) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(entries)
                return
            }
        })

    })

    router.get("/entries/:id", function (req, res) {
        const id = req.params.id
        entryManager.getEntry(id, function (errors, entry) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(entry)
                return
            }
        })

    })

    router.post("/entries", function (req, res) {
        const title = req.body.title
        const body = req.body.body
        const username = req.body.username
        const userId = req.body.userId
        entryManager.createEntry(title, body, username, userId, function (errors, entry) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(entry)
                return
            }
        })

    })

    router.patch("/entries/:id", function(req, res){
        const id = req.params.id
        const title = req.body.title
        const body = req.body.body
        entryManager.editEntry(id, title, body, function (errors, editedEntry){
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(editedEntry)
                return
            }
        })
    })

    router.delete("/entries/:id", function(req, res){
        const id = req.params.id
        entryManager.deleteEntry(id,  function (errors, deletedEntry){
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(deletedEntry)
                return
            }
        })
    })



    return router
}