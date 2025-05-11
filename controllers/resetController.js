import * as eventService from '../services/eventService.js';
import * as balanceService from '../services/balanceService.js';

export const resetData = async (req, res) => {
    try {
        await eventService.resetEvents();
        await balanceService.resetBalances();

        res.status(200).json();
    } catch (error) {
        next(error);
    }
};

