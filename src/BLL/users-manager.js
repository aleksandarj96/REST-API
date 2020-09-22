module.exports = function ({ usersRepository }) {
    return {

        getAllUsers: function (callback) {
            usersRepository.getAllUsers(function (error, result) {
                if (error) {
                    callback(error, null) //no errors in repository
                } else {
                    callback(null, result)
                }
            })
        },
        getUserWithId: function (id, callback) {
            usersRepository.getUserWithId(id, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        getUserByUsername: function (username, callback) {
            usersRepository.getUserByUsername(username, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        createUser: function (username, password, callback) {
            usersRepository.createUser(username, password, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        deleteUser: function (username, callback) {
            usersRepository.deleteUser(username, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        }
    }
}