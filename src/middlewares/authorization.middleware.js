class Authorization{
    hasRole(role){
        return (req,res,next) => (
            req.principal.roles.includes(role.toUpperCase().trim()) ? next() : res.status(403).json({message: 'Access denied'})
        )
    }
    sameUser(id){
        return (req,res,next) => (

            req.principal.userName === req.params[id] ? next() : res.status(403).json({message: 'Access denied'})
        )
    }
    checkRoleOrSameUser(role) {
        return (req, res, next) => {
            const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
            const sameUser = req.principal.userName === req.params.login;

            if (hasRole || sameUser) {
                return next();
            }

            return res.status(403).json({ message: 'Access denied' });
        };
    }

}

export default new Authorization();