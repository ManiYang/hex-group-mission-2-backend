const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, '發文者名稱 userName 未提供']
        },
        userPhotoUrl: {
            type: String,
            required: [true, '發文者照片 userPhtot 未提供']
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        content: {
            type: String,
            required: [true, '發文內容 content 未提供']
        },
        imageUrl: {
            type: String,
            default: ''
        }
    },
    // schema options:
    {
        versionKey: false
    }
)

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
