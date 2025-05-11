import { Router } from 'express';
import { resetData } from '../controllers/resetController.js';

const router = Router();

router.post('/', resetData);

export default router;