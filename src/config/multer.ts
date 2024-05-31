import multer from 'multer';

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/files');
  },
  filename: (req, file, cb) => {
    const time = new Date().getTime();
    cb(null, `${time}-${file.originalname}`);
  },
});
