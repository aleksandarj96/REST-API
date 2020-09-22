const express = require('express')

module.exports = function ({ commentManager }) {
    const router = express.Router()

    router.get("/comments", function (req, res) {
        commentManager.getAllComments(function (errors, comments) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(comments)
                return
            }
        })

    })

    router.get("/comments/posts/:postId", function (req, res) {
        const postId = req.params.postId
        commentManager.getCommentsWithPostId(postId, function (errors, comments) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(comments)
                return
            }
        })

    })


    router.get("/comments/:id", function (req, res) {
        const id = req.params.id
        commentManager.getCommentWithId(id, function (errors, comment) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(comment)
                return
            }
        })

    })

    router.post("/comments", function (req, res) {
        const body = req.body.body
        const username = req.body.username
        const userId = req.body.userId
        const postId = req.body.postId
        commentManager.createComment(body, username, userId, postId, function (errors, comment) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(comment)
                return
            }
        })

    })


    router.patch("/comments/:id", function (req, res) {
        const id = req.params.id
        const body = req.body.body
        commentManager.editComment(id, body, function (errors, editedComment) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(editedComment)
                return
            }
        })

    })


    router.delete("/comments/:id", function (req, res) {
        const id = req.params.id
        commentManager.deleteComment(id, function (errors, deletedComment) {
            if (errors) {
                res.status(400).json(errors)
                return
            } else {
                res.status(201).json(deletedComment)
                return
            }
        })

    })
    return router
}