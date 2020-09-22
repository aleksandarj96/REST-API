const USERS = [
    { id: 1, username: "aleks", password: "b^eVH?dD$6'nK))s" },
    { id: 2, username: "addemod", password: "gD'y/&v9r8Z+@]L%" },
    { id: 3, username: "ture", password: "Xhs3>}Tgx+F7,w8" }
]

function findUserWithId(id) {
    for (let user of USERS) {
        if (user.id == id)
            return user
    }
}

function findUserWithUsername(username) {
    for (let user of USERS) {
        if (user.username == username)
            return user
    }
}

function getUserIndex(username){
    return USERS.findIndex(user => user.username == username)
}

module.exports = function () {
    return {
        getAllUsers: function (callback) {
            callback(null, USERS)
        },

        getUserWithId: function (id, callback) {
            const user = findUserWithId(id)
            if (!user) {
                return callback("Could not find user with given id: " + id, null)
            }
            callback(null, user)
        },

        getUserByUsername: function (username, callback) {
            const user = findUserWithUsername(username)
            if (!user) {
                return callback("Could not find user: " + username, null)
            }
            callback(null, user)
        },

        createUser: function (username, password, callback) {
            const user = findUserWithUsername(username)
            if (user) {
                return callback("Username already exists: " + username, null)
            }
            const newUser = { id: USERS[USERS.length - 1].id + 1, username: username, password: password }
            USERS.push(newUser)
            callback(null, newUser)
        },

        deleteUser: function(username, callback){
            var deletedUser = findUserWithUsername(username)
            var userIndex = getUserIndex(username)

            if (userIndex >= 0) {
                USERS.splice(userIndex, 1)
            } else {
                return callback("could not find given user: " + username, null)
            }

            callback(null, deletedUser)
        },

        modifyUser: function(callback){
            //TO DO
            callback(null, 1)
        }
    }
}