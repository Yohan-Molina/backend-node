import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../handles/validator.handle";

const validatorCreateItem = [
    check("name").exists().notEmpty().isLength({ min: 3, max: 90 }),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req: Request, res: Response, next: NextFunction) => validateResult(req, res, next)
    
];

export { validatorCreateItem }