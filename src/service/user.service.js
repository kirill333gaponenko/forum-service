import * as repo from "../repository/user.repository.js";

export const addUser = async (user) =>
{
    const exist = await repo.getUserByLogin(user.login)
    if(exist){
        throw new Error('User with this login already exists');
    }
    return repo.createUser(user);

}
export const login = async () =>
{
    //TODO complete in class
    throw new Error('Not implemented');
}
export const deleteUser = async (login) =>
{
    const user = await repo.deleteUser(login)
    if(!user){
        throw new Error('User not found');
    }
    return user;
}
export const updateUser = async (login, data) =>
{
    const user = await repo.updateUser(login,data);
    if(!user){
        throw new Error('User not found');
    }
    return user;
}
export const addRole = async (login,role) =>
{
    const user = await repo.addRole(login,role);
    if(!user){
        throw new Error('User not found');
    }
    return user;
}
export const deleteRole = async (login,role) =>
{
    const user = await repo.deleteRole(login,role);
    if(!user){
        throw new Error('User not found');
    }
    return user;
}
export const changePassword = async () =>
{
    //TODO complete in class
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