import PostRepository from "../repository/post.repository.js";


class PostService {
    async createPost(author, {title,content,tags})  {
       return await PostRepository.createPost({title,author,content,tags})

    }



    async getPostById(id){
        return await PostRepository.getPostById(id)

    }
}
export default new PostService();