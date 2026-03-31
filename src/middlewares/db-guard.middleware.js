import {getDbConnectionError} from "../state/db.state.js";

export const dbGuard = (req, res, next) =>
{
    const dbErr = getDbConnectionError();
    if(dbErr){
        return next(new DatabaseConnectionError(dbErr))
    }
    next();
}