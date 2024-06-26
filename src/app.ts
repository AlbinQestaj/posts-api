import express from 'express';
import postRoutes from './routes/postRoutes';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'https://posts-tau-one.vercel.app' }));

app.use(express.json());
// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/api/posts', postRoutes);
app.use(errorHandler);

export default app;
