import multer from 'multer';
import { Router } from 'express';

import { storage } from '../config/multer';
import ExtractDataPdf from '../service/extrac-data';
import { RegisterFileData } from '../service/register-file-data';

const router = Router();

const upload = multer({ storage });

router.post('/', upload.single('file'), async (request, response) => {
  const fileName = request?.file?.filename;

  if (!fileName)
    return response.status(400).json({ message: 'File not found' });

  const pathFile = `/files/${fileName}`;
  const extracData = new ExtractDataPdf();
  const registerFileData = new RegisterFileData(pathFile, fileName);

  try {
    const pdfFileValues = await extracData.extract(pathFile);
    await registerFileData.register(pdfFileValues);

    return response.json(request?.file?.filename);
  } catch (error: any) {
    console.log(error);
    return response.status(400).json({ message: error.message });
  }
});

export default router;
