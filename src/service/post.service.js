import postRepository from "../repository/post.repository.js";

class PostService {
    async createPost(author, data) {
        const tags = [...new Set(data.tags)]
        return await postRepository.createPost({...data, author, tags});
    }

    async getPostById(id) {
        const post = await postRepository.findPostById(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async deletePost(id) {
        const post = await postRepository.deletePost(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async addLike(id) {
        const post = await postRepository.addLike(id);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return true;
    }

    async getPostsByAuthor(author) {
        return await postRepository.getPostsByAuthor(author)
    }


    async addComment(id, commenter, {message}) {
        const post = await postRepository.addComment(id, commenter, message);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }

    async getPostsByTags(tagsString) {

        return await postRepository.getPostsByTags(tagsString.split(','));
    }

    async getPostsByPeriod(dateFrom, dateTo) {
        return await postRepository.getPostsByPeriod(dateFrom, dateTo);
    }

    async updatePost(id, data) {

        const post = await postRepository.updatePost(id, data);
        if (!post) {
            throw new Error(`Post with id = ${id} not found`);
        }
        return post;
    }
}

export default new PostService();