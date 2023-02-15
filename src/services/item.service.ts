import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/nosql/item.model";

const insertCar = async (item: Car) => {
    const response = await ItemModel.create(item);
    return response;
    
}

const getAllCars = async () => {
    const response= await ItemModel.find({});
    return response;
}

const getCarById = async (id: string) => {
    const response = await ItemModel.findOne({_id: id });
    return response;
}

const updateCar = async (id: string, data: Car) => {
    const response= await ItemModel.findOneAndUpdate(
        {_id: id }, data, { new: true });
    return response;
}

const deleteCarById = async (id: string) => {
    const response = await ItemModel.remove({ _id: id });
    return response;
}

export { insertCar, getAllCars, getCarById, updateCar, deleteCarById }