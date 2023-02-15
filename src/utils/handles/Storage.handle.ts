import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({

    destination: function(req: Request, file, cb){
       const pathStorage = `${__dirname}/../../storage`;
       cb(null, pathStorage);
    },

    filename: function(req: Request, file, cb) {
        const ext = file.originalname.split('.').pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    }
}); 

const uploadMiddleware = multer({
    storage: storage
});

export { uploadMiddleware }