import User from "../model/user-model.js";

export function createUser(user) {
    return User.create(user)
}
export function loginAccount() {
    //TODO
    throw new Error('Not implemented');
}
export function deleteUser(login) {
    return User.findOneAndDelete({login}).exec()
}
export function updateUser(login, data) {

    return User.findOneAndUpdate({login},{$set:data}, {new:true}).exec()
}
export function addRole(login,role) {

    return User.findOneAndUpdate({login},{$addToSet:{'roles':role}},{new:true}).exec()
}
export function deleteRole(login,role) {
    return User.findOneAndUpdate({login},{$pull:{'roles':role}},{new:true}).exec()
}
export function changePassword() {
    //TODO
    throw new Error('Not implemented');
}
export function getUserByLogin(login) {

    return User.findOne({login}).exec()
}


