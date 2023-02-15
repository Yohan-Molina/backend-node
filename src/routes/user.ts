import { Router } from "express";
const router = Router();

// My imports
import { 
    getUsers,
    createUser } from "../controllers/user.controller";
import { validateCreateUser } from "../utils/validators/users.validator";

router.get('/', getUsers);
router.post('/', validateCreateUser, createUser);


export { router };