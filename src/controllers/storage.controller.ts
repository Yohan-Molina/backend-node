import { Request, Response } from "express";
import StorageModel from "../models/nosql/storage.model";
import { getAllStorage, insertStorage } from "../services/storage.service";
import { handleHttp } from "../utils/handles/error.handle";
 
const PUBLIC_URL = process.env.PUBLIC_URL;

const createStorage = async({ body, file }: Request, res: Response) => {
    try {
       const fileData = {
        filename: file?.filename,
        url: `${PUBLIC_URL}/${file?.filename}`
       }

       const data = await StorageModel.create(fileData);
       res.send({data})

    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_STORAGE', error)
    }
}

const getStorage = async(req: Request, res: Response) => {
    try {
        const response = await getAllStorage();
        res.status(302).send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_STORAGE', e)
    }
};

export { createStorage, getStorage };