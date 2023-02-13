import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { handleHttp } from "../utils/error.handle"

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            msg: 'SOLO LO VEN LAS PERSONAS LOGUEADAS',
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ORDERS')
    }
}


export { getOrders};