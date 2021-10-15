const users = []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //Clean data 
    username =username.trim().toLowerCase()
    room = room.trim().toLowerCase()


    //validate data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// addUser ( {
//     id: 22,
//     username: 'Jon',
//     room: 's p'
// })

// addUser ( {
//     id: 23,
//     username: 'Mike',
//     room: 's p'
// })

// addUser ( {
//     id: 24,
//     username: 'Jon',
//     room: 'center'
// })
const getUser = (id) => {
    // const index = users.findIndex((user) => user.id === id)

    // if(index !== -1) {
    //     return users.splice(index, 1)[0]
    // }

    const user = users.find((user) => user.id ===id )
    return user
} 


const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    const usersInRoom = users.filter((user) => user.room === room)
    return usersInRoom
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}