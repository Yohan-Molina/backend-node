import RoleModel from "../../models/nosql/role.model";

const isRoleValid = async(rol = '') => {
    const existsRole = await RoleModel.findOne({ rol });
    if( !existsRole ) {
        throw new Error(`Not a valid role ${ rol }`)
    }
}

export { isRoleValid }