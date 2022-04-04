import multer from "multer";
import { Request } from 'express'

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void


const multerStorage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: DestinationCallback): void => {
        cb(null, 'src/images')
    },
    filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback): void => {
        const ext = file.mimetype.split('/')[1]
        cb(null, `Anime${Date.now()}.${ext}`)
    }
});

const upload = multer({storage: multerStorage})

export default upload;