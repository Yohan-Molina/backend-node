import { Response } from "express";
import { UserI } from "../interfaces/user.interface";
import UserModel from "../models/nosql/user.model";
import { encryptPassword } from "../utils/handles/bcrypt.handle";


const insertUser = async ({ name, email, password, rol }: UserI) => {

    // Check if email exists
   /*  const checkIs = await UserModel.findOne({ email })
    if(checkIs) return {
        success: false,
        message: 'The email is already registered'
    }
 */
    // Encrypt the password
    const passHash = await encryptPassword(password);

    const response = await UserModel.create(
        { name, email, password: passHash, rol });
    return response;
};

const getAllUser = async () => {
    const response = await UserModel.find({});
    return response;
};

export { insertUser, getAllUser };