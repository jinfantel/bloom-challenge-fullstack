import express from 'express';
import routes from './routes/api';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
