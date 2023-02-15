import { Schema, model } from 'mongoose';
import { Role } from '../../interfaces/role.interface';

const RoleSchema = new Schema<Role>(
    {
        rol: {
            type: String, 
            required: [true, 'The role is required']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);


const RoleModel = model("roles", RoleSchema);
export default RoleModel;