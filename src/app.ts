import express from 'express';
import postRoutes from './routes/postRoutes';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/posts', postRoutes);
app.use(errorHandler);

export default app;
