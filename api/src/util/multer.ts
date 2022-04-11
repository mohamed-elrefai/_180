import multer from "multer";
import {Request} from 'express';

const multerStorage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: CallableFunction) => {

    }
})