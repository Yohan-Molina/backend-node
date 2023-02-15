import { Request, Response } from "express";
import { handleHttp } from "../utils/handles/error.handle";
import { 
    deleteTrackById,
    getAllTracks, 
    getTrackById, 
    insertTrack, 
    updateTrackById} from "../services/track.service";


const createTrack = async({ body }: Request, res: Response) => {
    try {
        const response = await insertTrack(body);
        res.status(201).send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATE_TRACK', error);
    }
};

const getTracks = async(req: Request, res: Response) => {
    try {
        const response = await getAllTracks();
        res.status(302).send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_TRACKS', error)
    }
};

const getTrack = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getTrackById(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_TRACK', e)
    }
}

const updateTrack = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateTrackById(id, body);
        res.status(200).send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_Track')
    }
}

const deleteTrack = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteTrackById(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_Track', e)
    }
}

export { createTrack, getTracks, getTrack, updateTrack, deleteTrack }
