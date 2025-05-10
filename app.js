import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import balanceRoutes from './routes/balanceRoutes.js';

const app = express();

app.use(express.json());
app.use('/event', eventRoutes);
app.use('/balance', balanceRoutes);

export default app;