import * as service from "../service/user.service.js";

export const register = async (req, res,next) =>
{
    try{
        const user = await service.addUser(req.body);
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}
export const login = async (req, res,next) =>
{
    //TODO
    throw new Error('Not implemented');
}
export const deleteUser = async (req, res,next) =>
{
    try{
        const user = await service.deleteUser(req.params.id);
        console.log(user)
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}
export const updateUser = async (req, res,next) =>
{
    try{
        const user = await service.updateUser(req.params.id,req.body);
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}
export const addRole = async (req, res,next) =>
{
    try{
        const user = await service.addRole(req.params.id,req.params.role);
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}
export const deleteRole = async (req, res,next) =>
{
    try{
        const user = await service.deleteRole(req.params.id,req.params.role);
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}
export const changePassword = async (req, res,next) =>
{
    //TODO
    throw new Error('Not implemented');
}
export const getUser = async (req, res,next) =>
{
    try{
        const user = await service.getUser(req.params.id);
        return res.status(201).json(user);
    }catch (e) {
        next(e);
    }
}


