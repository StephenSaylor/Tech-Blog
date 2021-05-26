const { Post } = require('../models')

const postData = [{
        title: 'Post Number One',
        content: 'post data comment content one',
        user_id: 1

    },
    {
        title: 'Post Number Two',
        content: 'post data comment content two',
        user_id: 2
    },
    {
        title: 'Post Number Three',
        content: 'post data comment content three',
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts