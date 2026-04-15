import userAccountService from "../service/userAccount.service.js";


class userAccountController {
    async register(req, res, next) {
        try{
            const userAccount = await userAccountService.register(req.body);
            return res.status(201).json(userAccount);
        }catch (e) {
            return next(e);
        }
    }
    async login(req,res,next){
        const  userAccount = await userAccountService.getUser(req.principal.userName);
        return res.json(userAccount);
    }

    async deleteUser(req,res,next){
        try{
            const userAccount = await userAccountService.removeUser(req.params.login);
            return res.json(userAccount);
        }catch (e) {
            return next(e);
        }
    }

    async updateUser(req,res,next){
        try{
            const userAccount = await userAccountService.updateUser(req.params.login,req.body);
            return res.json(userAccount);
        }catch (e) {
            return next(e);
        }
    }
    async addRole(req,res,next){
        try{
            const userRoles = await userAccountService.ChangeRole(req.params.login, req.params.role, true)
            // return res.json(userRoles);
            return res.json(userRoles.toJSON({hidePersonal: true}));
        }catch (e) {
            return next(e);
        }
    }

    async deleteRole(req,res,next){
        try{
            const userRoles = await userAccountService.ChangeRole(req.params.login, req.params.role, false)
            return res.json(userRoles);
            // return res.json(userRoles.toJSON({hidePersonal: true}));
        }catch (e) {
            return next(e);
        }
    }

    async changePassword(req,res,next){

        await userAccountService.changePassword(req.principal.userName,req.body.password)
        return res.sendStatus(204);

    }

    async getUser(req,res,next){
        try{
            const user = await userAccountService.getUser(req.params.login);
            return res.json(user);
        }catch (e) {
            return next(e);
        }
    }
}
export default new userAccountController();