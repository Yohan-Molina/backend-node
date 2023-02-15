import { Request, Response } from "express"
import { insertCar, getAllCars, getCarById, updateCar, deleteCarById } from "../services/item.service"
import { handleHttp } from "../utils/handles/error.handle"

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCarById(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getAllCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }
}

const createItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.status(200).send(responseItem);
    } catch (err) {
        handleHttp(res, 'ERROR_CREATE_ITEM', err)
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.status(200).send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCarById(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e)
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem };