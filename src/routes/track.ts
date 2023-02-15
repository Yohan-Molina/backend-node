import { Router } from "express";
const router = Router();

// My imports
import { 
    createTrack, 
    deleteTrack, 
    getTrack, 
    getTracks, 
    updateTrack} from "../controllers/tracks.controller";
import { validatorCreateItem } from "../utils/validators/tracks.validator";

router.get('/', getTracks);
router.get('/:id', getTrack);
router.post('/', validatorCreateItem, createTrack);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);



export { router };