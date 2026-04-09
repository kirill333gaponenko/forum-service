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






const router = Router();

router.post('/register', register)
router.post('/login', login)
router.delete('/user/:id', deleteUser)
router.patch('/user/:id',updateUser)
router.patch('/user/:id/role/:role',addRole)
router.delete('/user/:id/role/:role',deleteRole)
router.patch('/password',changePassword)
router.get('/user/:id',getUser)

export default router;