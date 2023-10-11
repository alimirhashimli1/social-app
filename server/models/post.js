import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        min: 1,
        max: 60
    },
    lastName: {
        type: String,
        required: true,
        min: 1,
        max: 60
    },
    userPicturePath: String,
    picturePath: {
        type: String,
        default: ""
    },
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: []
    },
    description: String,
    location: String,
}, {timestamps: true})


const Post = mongoose.model("Post", postSchema);

export default Post;