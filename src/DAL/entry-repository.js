const ENTRIES = [
    { id: 1, title: '123', body: 'hello world 1', username: 'aleks', userId: 1, likes: '20', edited: true },
    { id: 2, title: '123', body: 'hello world 2', username: 'aleks', userId: 1, likes: '12', edited: false },
    { id: 3, title: '123', body: 'hello world 3', username: 'addemod', userId: 2, likes: '45', edited: false },
    { id: 4, title: '123', body: 'hello world 4', username: 'ture', userId: 3, likes: '9', edited: true }
]

function getEntryIndex(id) {
    return ENTRIES.findIndex(entry => entry.id == id)
}

function getEntryById(id) {
    for (let entry of ENTRIES) {
        if (entry.id == id)
            return entry
    }
}

function getEntriesForUserId(userId) {
    var entries = []

    for (let entry of ENTRIES) {
        if (entry.userId == userId)
            entries.push(entry)
    }
    return entries
}

module.exports = function () {
    return {
        getAllEntries: function (callback) {
            callback(null, ENTRIES)
        },

        getEntriesWithUserId: function (userId, callback) {
            const entries = getEntriesForUserId(userId)
            if (!entries)
                return callback('no entries found for userId: ' + userId, null)

            callback(null, entries)
        },

        getEntry: function (id, callback) {
            const entry = getEntryById(id)
            if (!entry)
                return callback('no entry found for id: ' + id, null)

            callback(null, entry)
        },

        createEntry: function (title, body, username, userId, callback) {
            const newEntry = { id: ENTRIES[ENTRIES.length - 1].id + 1, title: title, body: body, username: username, userId: userId, likes: 0, edited: false }
            ENTRIES.push(newEntry)
            callback(null, newEntry)
        },

        editEntry: function (id, title, body, callback) {
            const index = getEntryIndex(id)

            if (index >= 0) {
                ENTRIES[index].title = title
                ENTRIES[index].body = body
                if (ENTRIES[index].edited == false)
                    ENTRIES[index].edited = true

                callback(null, ENTRIES[index])

            } else {
                callback("could not find entry with given id", null)
            }

        },

        deleteEntry: function (id, callback) {
            var deletedEntry = getEntryById(id)
            var index = getEntryIndex(id)

            if (index >= 0) {
                ENTRIES.splice(index, 1)
            } else {
                return callback("could not find entry with given id", null)
            }

            callback(null, deletedEntry)
        }

    }
}