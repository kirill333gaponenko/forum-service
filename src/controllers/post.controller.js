import postService from "../service/post.service.js";
import {createPostSchema} from "../validator/studentValidator.js";

class PostController {
    async createPost(req, res, next) {
        const {error} = createPostSchema.validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        try {

            const post = await postService.createPost(req.params.author, req.body);
            return res.status(201).json(post);
        } catch (e) {
            return next(e);
        }

    }

    async getPostById(req, res, next) {
        try {
            const post = await postService.getPostById(req.params.id);
            return res.status(200).json(post);
        } catch (e) {
            return next(e);
        }
    }

    async deletePost(req, res, next) {
        // TODO handle service post deletion
        throw new Error('Not implemented');
    }

    async addLike(req, res, next) {
        // TODO handle service like addition
        throw new Error('Not implemented');
    }

    async getPostsByAuthor(req, res, next) {
        // TODO handle service posts retrieval by author
        throw new Error('Not implemented');
    }

    async addComment(req, res, next) {
        // TODO handle service comment addition
        throw new Error('Not implemented');
    }

    async getPostsByTags(req, res, next) {
        // TODO handle service posts retrieval by tags
        throw new Error('Not implemented');
    }

    async getPostsByPeriod(req, res, next) {
        // TODO handle service posts retrieval by period
        throw new Error('Not implemented');
    }

    async updatePost(req, res, next) {
        // TODO handle service post update
        throw new Error('Not implemented');
    }
}

export default new PostController();