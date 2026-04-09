import User from "../model/user-model.js";

export function createUser(user) {
    return User.create(user)
}
export function enterAccount() {
    //TODO
    throw new Error('Not implemented');
}
export function deleteUser() {
    //TODO
    throw new Error('Not implemented');
}
export function updateUser() {
    //TODO
    throw new Error('Not implemented');
}
export function addRole() {
    //TODO
    throw new Error('Not implemented');
}
export function deleteRole() {
    //TODO
    throw new Error('Not implemented');
}
export function changePassword() {
    //TODO
    throw new Error('Not implemented');
}
export function getUserByLogin(login) {

    return User.find({'login':login}).exec()
}


