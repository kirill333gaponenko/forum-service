import * as repo from "../repository/user.repository.js";

export const addUser = async (user) =>
{
    const exist = await repo.getUserByLogin(user.login)
    if(exist.length){
        throw new Error('User with this login already exists');
    }
    return repo.createUser(user);

}
export const login = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const deleteUser = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const updateUser = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const addRole = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const deleteRole = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const changePassword = async () =>
{
    //TODO
    throw new Error('Not implemented');
}
export const getUser = async (login) =>
{
    const user = await repo.getUserByLogin(login);
    if(!user){
        throw new Error('User not found');
    }
    return user;
}