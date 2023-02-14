import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/nosql/item.model"

const getAllOrders = async () => {
    const response= await ItemModel.find({});
    return response;
}


export { getAllOrders }