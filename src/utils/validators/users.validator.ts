import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { emailExists, validateResult } from "../handles/validator.handle";
import { isRoleValid } from "./role.validator";

const validateCreateUser = [
    check('email', 'The emails is not valid').exists().isEmail(), 
    check('email').custom(emailExists),
    check('password', 'The password must have more than 6 characters').isLength({ min: 6}),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(isRoleValid),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
];

export { validateCreateUser };