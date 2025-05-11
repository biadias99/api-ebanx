import * as balanceService from '../services/balanceService.js';

export const getBalanceById = async (req, res) => {
    try {
        const balance = await balanceService.getBalanceById(+req.params.id);
        
        if (!balance) {
            return res.status(404).json(0);
        }

        res.status(200).json(balance.amount);
    } catch (error) {
        next(error);
    }
};

