import { Router } from 'express';
import { getBalanceByAccountId } from '../controllers/balanceController.js';

const router = Router();

router.get('/:id', getBalanceByAccountId);

export default router;