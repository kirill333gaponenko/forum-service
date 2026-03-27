import Post from "../model/post-model.js";

class PostRepository {

    async createPost(post) {

        return Post.create(post)

    }
    async findPostById(id){
        return Post.findById(id);
    }
    async deletePost(id){
        return Post.findByIdAndDelete(id)
    }
    async addLike(id){
        //TODO
        throw new Error('Not implemented')
    }
    async getPostsByAuthor(author){
        //TODO
        throw new Error('Not implemented')
    }
    async addComment(id,author){
        //TODO
        throw new Error('Not implemented')
    }
    async getPostsByTags(tags){
        //TODO
        throw new Error('Not implemented')
    }
    async getPostsByPeriod(from,to){
        //TODO
        throw new Error('Not implemented')
    }
    async updatePost(id){
        //TODO
        throw new Error('Not implemented')
    }

}
export default new PostRepository();