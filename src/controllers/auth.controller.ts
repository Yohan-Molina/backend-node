import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service";

const registerCtrl = async ({ body }: Request, res: Response) => {
    /* const response = await registerNewUser(body);
    res.send(response) */

    res.send('ESTE ES EL REGISTER')
}

const loginCtrl = async ({ body }: Request, res: Response) => {
/*     const { email, password } = body;
    const response = await loginUser({ email, password });

    if(response === 'PASSWORD_INCORRECT') {
        res.status(403).send(response)
    } else {
        res.status(200).send(response)
    } */

    res.send('ESTE ES EL LOGIN')

}

export { registerCtrl, loginCtrl };