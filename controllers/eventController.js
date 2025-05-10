import * as eventService from '../services/eventService.js';

const hashOperation = {
    'deposit': eventService.deposit.bind(eventService),
    'transfer': eventService.transfer.bind(eventService),
    'withdraw': eventService.withdraw.bind(eventService),
}

export const getEvents = async (req, res) => {
    try {
        const events = await eventService.getEvents();
        res.json(events);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

export const defineOperation = async (req, res) => {
    try {
        const { type, amount, origin, destination } = req.body;

        const event = await hashOperation[type]({ type, amount, origin, destination });

        if (event === 0) {
            return res.status(404).json(event);
        }

        res.status(201).json(event);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

