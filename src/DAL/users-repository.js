const USERS = [
    { id: 1, username: "aleks", password: "b^eVH?dD$6'nK))s" },
    { id: 2, username: "addemod", password: "gD'y/&v9r8Z+@]L%" },
    { id: 3, username: "ture", password: "Xhs3>}Tgx+F7,w8{" }
]
function findUserWithId(id) {
    for (let user of USERS) {
        if (user.id == id)
            console.log(user.id)
            return user
    }
}

module.exports = function () {
    return {
        getAllUsers: function (callback) {
            callback(null, USERS)
        },

        getUserWithId: function (callback, id) {
            const user = findUserWithId(id)
            if (!user) {
                return callback(new Error("could not find user with given id" + id), null)
            } 
            callback(null, user)
        }
    }
}