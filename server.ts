import express from 'express';
import router from './routes';
const app = express();

app.use('/api', router);

// Start the server and listen on the specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port || 8000}`);
});
