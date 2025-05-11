import express from 'express';
import eventRoutes from './routes/eventRoutes.js';
import balanceRoutes from './routes/balanceRoutes.js';
import resetRoutes from './routes/resetRoutes.js';
import errorMessage from './middleware/errorMessage.js';

const app = express();

app.use(express.json());
app.use('/event', eventRoutes);
app.use('/balance', balanceRoutes);
app.use('/reset', resetRoutes);
app.use(errorMessage);

export default app;