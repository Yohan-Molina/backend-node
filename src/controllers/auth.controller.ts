import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
    const response = await registerNewUser(body);
    res.send(response)
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const response = await loginUser({ email, password });

    if(response === 'PASSWORD_INCORRECT') {
        res.status(403).send(response)
    } else {
        res.status(200).send(response)
    }

}

export { registerCtrl, loginCtrl };