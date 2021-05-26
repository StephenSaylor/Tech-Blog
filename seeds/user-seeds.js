const { User } = require('../models')

const userData = [{
        username: 'FirstFrank',
        password: 'frankfirst'

    },
    {
        username: 'SecondSteve',
        password: 'stevesecond'
    },
    {
        username: 'ThirdTom',
        password: 'tomthird'
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers