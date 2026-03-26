import Post from "../model/post-model.js";

class PostRepository {

    async createPost(post) {

        return Post.create(post)

    }
    async getPostById(id){
        return Post.findById(id);
    }

}
export default new PostRepository();