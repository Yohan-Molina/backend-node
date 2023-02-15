import { Request, Response } from "express"
import { getAllUser, insertUser } from "../services/user.service";
import { handleHttp } from "../utils/handles/error.handle";

const createUser = async({ body }: Request, res: Response) => {
    try {
        const response = await insertUser(body);
        res.status(201).send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_USER', error)
    }
}

const getUsers = async(req: Request, res: Response) => {
    try {
        const response = await getAllUser();
        res.status(302).send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USERS', e)
    }
};

export { getUsers, createUser };