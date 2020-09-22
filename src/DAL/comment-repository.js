COMMENTS = [
    { id: 1, body: 'this is the body 1', username: 'aleks', userId: 1, postId: 2, likes: 0, edited: false },
    { id: 2, body: 'this is the body 2', username: 'addemmod', userId: 2, postId: 1, likes: 1, edited: false },
    { id: 3, body: 'this is the body 3', username: 'aleks', userId: 1, postId: 2, likes: 2, edited: true },
    { id: 4, body: 'this is the body 4', username: 'addemod', userId: 2, postId: 1, likes: 0, edited: false }
]

function getCommentIndex(id) {
    return COMMENTS.findIndex(comment => comment.id == id)
}

function getCommentById(id) {
    for (let commnent of COMMENTS) {
        if (commnent.id == id)
            return commnent
    }
}

function getAllCommentsByPostId(postId) {
    var comments = []

    for (let comment of COMMENTS) {
        if (comment.postId == postId)
            comments.push(comment)
    }

    if (comments.length <= 0)
        return null

    return comments
}

module.exports = function () {
    return {
        getAllComments: function (callback) {
            callback(null, COMMENTS)
        },

        getCommentsWithPostId: function (postId, callback) {
            const comments = getAllCommentsByPostId(postId)

            if (!comments)
                return callback("No comments for given postId: " + postId, null)

            callback(null, comments)

        },

        getCommentWithId: function (id, callback) {
            const comment = getCommentById(id)
            if(!comment)
                return callback("No comment found for given id: " + id, null)

            callback(null, comment)
        },

        createComment: function (body, username, userId, postId, callback) {
            const newComment = { id: COMMENTS[COMMENTS.length - 1].id + 1, body: body, username: username, userId: userId, postId: postId, likes: 0, edited: false }
            COMMENTS.push(newComment)
            callback(null, newComment)
        },

        editComment: function (id, body, callback) {
            const index = getCommentIndex(id)

            if (index >= 0) {
                COMMENTS[index].body = body
                if (COMMENTS[index].edited == false)
                    COMMENTS[index].edited = true

                callback(null, COMMENTS[index])

            } else {
                callback("could not find comment with given id: " + id, null)
            }
        },

        deleteComment: function (id, callback) {
            var deletedComment = getCommentById(id)
            var index = getCommentIndex(id)

            if (index >= 0) {
                COMMENTS.splice(index, 1)
            } else {
                return callback("could not find comment with given id: " + id, null)
            }

            callback(null, deletedComment)
        }

    }

}