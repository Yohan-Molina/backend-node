import { hashSync, genSaltSync, compare } from "bcryptjs"

const encryptPassword = async (password: string) => {
    const salt = genSaltSync();
    const passwordHash = await hashSync(password, salt);
    return passwordHash;
}


const verifyPassword = async (password: string, encryptedPassword: string) => {
    const isCorrect = await compare(password, encryptedPassword);
    return isCorrect;
}

export { encryptPassword, verifyPassword }