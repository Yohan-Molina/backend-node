import { Request, Response } from "express"
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interfaces";
import UserModel from "../models/user.model";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {

    // Validamos si existe User en DB
    const checkIs = await UserModel.findOne({ email })
    if(checkIs) return "ALREADY_USER";

    // Se encripta la contraseña
    const encryptedPassword = await encryptPassword(password);

    // Se crea el usuario
    const registerNewUser = await UserModel.create({ 
        email, 
        password:encryptedPassword, 
        name })
    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    // Validamos si existe User en DB
    const checkIs = await UserModel.findOne({ email })
    if(!checkIs) return "NOT_FOUND_USER";

    // Validamos la contrasea plana con encriptada
    const passwordHash = checkIs.password;
    const isCorrect = await verifyPassword(password, passwordHash); 

    if(!isCorrect) return "PASSWORD_INCORRECT";

    const token = generateToken(checkIs.email);

    const dataUser = {
        token: token,
        user: checkIs
    };

    return dataUser;

};

export { registerNewUser, loginUser };