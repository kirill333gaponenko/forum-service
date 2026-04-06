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

        return Post.findByIdAndUpdate(id, {$inc:{likes:1}},{new:true}).exec()


    }
    async getPostsByAuthor(author){

        return Post.find({author: new RegExp(`^${author}$`,'i')}).exec()
    }
    async addComment(id,comment){

        return Post.findByIdAndUpdate(id,{$push:{comments:comment}},{new:true}).exec()
    }
    async getPostsByTags(tags){
        const regexConditions = tags.map(tag => ({tags: new RegExp(`^${tag}$`,'i')}));
        return Post.find({$or:regexConditions}).exec()
    }
    async getPostsByPeriod(from,to){
        return Post.find({dateCreated: {$gte: from, $lte: to}}).exec()


    }
    async updatePost(id,updateData){

        const tags =updateData.tags ?? [];
        delete updateData.tags;
        const data = {...updateData, $addToSet: {tags:tags}};
        return Post.findByIdAndUpdate(id,data,{new:true}).exec()
    }

}
export default new PostRepository();