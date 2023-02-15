import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/nosql/storage.model";

const insertStorage = async (storage: Storage) => {
    const response = await StorageModel.create(storage);
    return response;
    
}

const getAllStorage = async () => {
    const response= await StorageModel.find({});
    return response;
}

export { insertStorage, getAllStorage }