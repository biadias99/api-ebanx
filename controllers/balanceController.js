import * as balanceService from '../services/balanceService.js';

export const getBalanceByAccountId = async (req, res) => {
    try {
        const balance = await balanceService.getBalanceByAccountId(+req.params.id);

        if (!balance) {
            return res.status(404).json(0);
        }
        
        res.status(200).json(balance.amount);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

