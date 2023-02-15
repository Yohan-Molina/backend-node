import { Request, Response, Router } from "express";
const router = Router();
import { uploadMiddleware } from "../utils/handles/Storage.handle";

import { 
    createStorage, 
    getStorage } from "../controllers/storage.controller";


router.get('/', getStorage);
router.post('/',uploadMiddleware.single("myfile"), createStorage);

export { router };