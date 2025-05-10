import * as eventService from '../services/eventService.js';

export const getEvents = async (req, res) => {
    try {
        const events = await eventService.getEvents();
        res.json(events);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
};

