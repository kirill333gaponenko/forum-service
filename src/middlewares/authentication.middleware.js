import UserAccount from "../model/userAccount.model.js";


const authentication = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization || !authorization.startsWith('Basic ')){
        return res.status(401).json({message: 'Authorization  is missing'});
    }
    const base64Credentials = authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [login, password] = credentials.split(':');
    const userAccount = await UserAccount.findById(login);

    if(!userAccount || !(await userAccount.comparePassword(password))){
        return res.status(401).json({message: 'Invalid credentials'});
    }
       req.headers.authorization = ''
       req.principal = {userName: login, roles: userAccount.roles}
    next();
}

export default authentication;