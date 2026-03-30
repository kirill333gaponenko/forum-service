import Post from "../model/post-model.js";

class PostRepository {

    async createPost(post) {

        return Post.create(post)

    }
    async findPostById(id){
        return Post.findById(id).exec();
    }
    async deletePost(id){
        return Post.findByIdAndDelete(id).exec()
    }
    async addLike(id){


        return Post.findByIdAndUpdate(id,{$inc:{likes:1}},{new:true}).exec()
    }
    async getPostsByAuthor(author){

        return Post.find({author: new RegExp(`^${author}$`,'i')}).exec()

    }
    async addComment(id,commenter,message){

        return Post.findByIdAndUpdate(id, {
            $push: {"comments": {
                user: commenter,
                message: message,
                dateCreated: new Date(),
                likes:0
                }}

        },{new:true})
    }
    async getPostsByTags(tags){

        const regexConditions = tags.map(tags => ({
            tags: new RegExp(`^${tags}$`, 'i')
        }));
        return Post.find({$or:regexConditions}).exec()
    }
    async getPostsByPeriod(from,to){

        return Post.find({dateCreated:{$lte:to, $gte:from}}).exec()

    }
    async updatePost(id,date){

        return Post.findByIdAndUpdate(id,date,{new:true}).exec()
    }

}
export default new PostRepository();