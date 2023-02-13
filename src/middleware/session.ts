import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        if(!isUser) {
            res.status(400).send("YOU DO NOT HAVE A VALID SESSION")
        } else {
            req.user = isUser;
            next();
        }
        
    } catch (err) {
        res.status(400).send({ error: err })
    }
}

export { checkJwt };