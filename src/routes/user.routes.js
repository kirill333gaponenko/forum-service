import { Router } from "express";
import {
    login,
    register,
    deleteUser,
    updateUser,
    addRole,
    deleteRole,
    changePassword,
    getUser
} from "../controllers/user.controller.js";
import validate from "../middlewares/validation.middleware.js";






const router = Router();

router.post('/register', validate('register'), register)
router.post('/login', login)
router.delete('/user/:id', deleteUser)
router.patch('/user/:id',validate('updateUser'),updateUser)
router.patch('/user/:id/role/:role',addRole)
router.delete('/user/:id/role/:role',deleteRole)
router.patch('/password',changePassword)
router.get('/user/:id',getUser)

export default router;