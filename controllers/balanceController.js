import * as balanceService from '../services/balanceService.js';

export const getBalanceById = async (req, res, next) => {
    try {
        const accountId = req.query.account_id;
        const balance = await balanceService.getBalanceById(+accountId);
        
        if (!balance) {
            return res.status(404).json(0);
        }

        res.status(200).json(balance.amount);
    } catch (error) {
        next(error);
    }
};

