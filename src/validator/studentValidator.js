import joi from 'joi';


export const createPostSchema = joi.object({

    title: joi.string().required(),
    content: joi.string().required(),
    tags: joi.array().items(joi.string()).default([]),

});
