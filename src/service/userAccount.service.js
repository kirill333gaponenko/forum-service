import userAccountRepository from "../repository/userAccount.repository.js";


class UserAccountService {
    async register(user){

        try{
            return await userAccountRepository.addUser(user);
        }catch (e) {
            console.log(e)
            throw new Error('User already exists')
        }

    }


    async removeUser(login){
        const userAccount = await userAccountRepository.removeUser(login);
        if(!userAccount){
            throw new Error(`User with login = ${login} not found`);
        }
        return userAccount;

    }

    async updateUser(login,updateData){
        const userAccount = await userAccountRepository.updateUser(login,updateData);
        if(!userAccount){
            throw new Error(`User with login = ${login} not found`);
        }
        return userAccount;
    }

    async ChangeRole(login,role, isAddRole){
        role = role.toUpperCase();
        let userAccount;
        if(isAddRole){
            userAccount = await userAccountRepository.addRole(login,role);
        }else{
            userAccount = await userAccountRepository.removeRole(login,role);
        }
        if(!userAccount) {
            throw new Error(`User with login = ${login} not found`);
        }
        // const {roles} = userAccount;
        // return {login, roles};
        const {firstName, lastName, ...userRoles} = userAccount.toObject()
        return userAccount
    }




    async changePassword(login, newPassword){

        const userAccount = await userAccountRepository.changePassword(login, newPassword);
        if(!userAccount){
            throw new Error(`User with login = ${login} not found`);
        }

    }

    async getUser(login){
        const user = await userAccountRepository.findUser(login);
        if(!user){
            throw new Error(`User with login = ${login} not found`);
        }
        return user;
    }
}

export default new UserAccountService();