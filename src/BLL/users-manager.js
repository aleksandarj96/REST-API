const usersRepository = require("../DAL/users-repository")

module.exports = function ({ usersRepository }) {
    return {

        getAllUsers: function (callback) {
            usersRepository.getAllUsers(function (error, result) {
                if (error) {
                    callback(new Error("Could not get all users"), null)
                } else {
                    callback(null, result)
                }
            })
        },
        getUserWithId: function (callback) {
            usersRepository.getUserWithId(function (error, result) {
                if (error) {
                    callback(new Error("Could not find user"), null)
                } else {
                    callback(null, result)
                }
            })
        }
    }
}