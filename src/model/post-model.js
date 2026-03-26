import mongoose from "mongoose";
import createRandomId24 from "../utils/idCreator.js";


const postSchema = new mongoose.Schema({
    _id: {type: String, default:createRandomId24()},
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    dateCreated: {type:String, default: (new Date()).toLocaleString()},
    tags: {
        type: Array,
        of: String,
        default:[]

    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Array,
        of: String,
        default: []

    }


},
{
    versionKey: false,

})

const Post =  mongoose.model('Post',postSchema,'forum')

export default Post;



// Post
// {
//     "id": "61b86639905cb348d52a138d",
//     "title": "JavaEE",
//     "content": "Java is the best for backend",
//     "author": {{user}},
//     "dateCreated": "2021-12-14T11:39:05",
//     "tags": [
//     "Java",
//     "backend",
//     "JEE",
//     "Spring"
// ],
//     "likes": 0,
//     "comments": []
// }

