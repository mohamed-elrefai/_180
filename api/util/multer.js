const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
            cb(null, 'images');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `Dark-image${Date.now()}.${ext}`);
    }
});

const upload = multer({storage: multerStorage});

module.exports = upload