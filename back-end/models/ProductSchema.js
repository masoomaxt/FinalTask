const mongoose = require('mongoose')
const Bookmarkschema = new mongoose.Schema(
    {
        userId: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        picture: {
            type: String,
            required: [true, "please Enter Name"],
            maxlength: [30, "Bookmark picture cannot exceed 30 charachters"],
        },
        link: {
            type: String,
            required: [true, "link is required"]
        },
        name: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            default: ""
        }


    }
)
module.exports = mongoose.model('Bookmark', Bookmarkschema);