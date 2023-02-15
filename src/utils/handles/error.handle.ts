import { Response } from "express";

const handleHttp = (res: Response, message: string, error?: any) => {
    res.status(500).send({
        message,
        error
    });
}


export { handleHttp };