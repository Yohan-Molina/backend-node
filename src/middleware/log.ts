import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("HOLA SOY EL LOG");
    next();

};

export { logMiddleware };