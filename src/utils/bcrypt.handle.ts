import { hash, compare } from "bcryptjs"

const encryptPassword = async (password: string) => {
    const passwordHash = await hash(password, 8);
    return passwordHash;
}

const verifyPassword = async (password: string, encryptedPassword: string) => {
    const isCorrect = await compare(password, encryptedPassword);
    return isCorrect;
}

export { encryptPassword, verifyPassword }