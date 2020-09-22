module.exports = function ({ entryRepository }) {
    return {

        getAllEntries: function (callback) {
            entryRepository.getAllEntries(function (error, result) {
                if (error) {
                    callback(error, null) //no errors in repository
                } else {
                    callback(null, result)
                }
            })
        },

        getEntriesWithUserId: function (userId, callback) {
            entryRepository.getEntriesWithUserId(userId, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        getEntry: function (id, callback) {
            entryRepository.getEntry(id, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        createEntry: function (title, body, username, userId, callback) {
            entryRepository.createEntry(title, body, username, userId, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        editEntry: function (id, title, body, callback) {
            entryRepository.editEntry(id, title, body, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        },

        deleteEntry: function (id, callback) {
            entryRepository.deleteEntry(id, function (error, result) {
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, result)
                }
            })
        }

    }
}