import express from 'express';
import mongoose from 'mongoose';
import { Cors } from './middleware/Cors.js';
import sendDataRouter from './Router/SendData.js';
import PaginationData from './Router/PaginationData.js';


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/FoodData').then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(Cors)

app.use('/api/allitems', sendDataRouter);
app.use('/api/pagination', PaginationData)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
