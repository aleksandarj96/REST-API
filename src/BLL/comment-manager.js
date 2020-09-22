module.exports = function ({ commentRepository }) {
    return {

        getAllComments: function (callback) {
            commentRepository.getAllComments(function (error, result) {
                if (error) {
                    callback(error, null) //no errors in repository
                } else {
                    callback(null, result)
                }
            })
        },

        getCommentsWithPostId: function (postId, callback) {
            commentRepository.getCommentsWithPostId(postId, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        getCommentWithId: function (id, callback) {
            commentRepository.getCommentWithId(id, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        createComment: function (body, username, userId, postId, callback) {
            commentRepository.createComment(body, username, userId, postId, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        editComment: function (id, body, callback) {
            commentRepository.editComment(id, body, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },
        deleteComment: function (id, callback) {
            commentRepository.deleteComment(id, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        }
    }
}