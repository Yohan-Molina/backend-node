import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import UserModel from "../../models/nosql/user.model";

const validateResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403).send({ errors: error })
    }
}

const emailExists = async(email = '') => {
    const existEmail = await UserModel.findOne({ email })
    if(existEmail) {
        throw new Error(`The email ${email} is already registered`)
    }
}

export { validateResult, emailExists };