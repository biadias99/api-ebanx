import { resetBalances } from "../services/balanceService.js";
import { resetEvents } from "../services/eventService.js";

export const resetData = async (req, res, next) => {
    try {
        await resetEvents();
        await resetBalances();

        res.status(200).send('OK');
    } catch (error) {
        next(error);
    }
};

