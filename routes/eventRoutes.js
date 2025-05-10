import { Router } from 'express';
import { getEvents, defineOperation } from '../controllers/eventController.js';

const router = Router();

router.get('/', getEvents);
router.post('/', defineOperation);

export default router;