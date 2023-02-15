import { Schema, model } from 'mongoose';
import { User } from '../../interfaces/userold.interfaces';


const AuthSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


const AuthModel = model("auth", AuthSchema);

export default AuthModel;