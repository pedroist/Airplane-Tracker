import express from "express";
import planesRoute from './routes/planesRoute';

const app = express();
const port = 3000;

app.use('/api/planes', planesRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
