import { Router } from 'express';
import { getBalanceById } from '../controllers/balanceController.js';

const router = Router();

router.get('/:id', getBalanceById);

export default router;