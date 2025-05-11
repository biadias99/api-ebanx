import { resetBalances } from "../services/balanceService.js";
import { resetEvents } from "../services/eventService.js";

export const resetData = async (req, res) => {
    try {
        await resetEvents();
        await resetBalances();

        res.status(200).json();
    } catch (error) {
        next(error);
    }
};

