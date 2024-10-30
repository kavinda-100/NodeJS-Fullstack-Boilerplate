import express from 'express';
import dotenv from 'dotenv';

import MainRoute from "./mainRoute";
import errorHandler from "./lib/errorHnadeller";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// routes
app.use('/api/v1', MainRoute);

// error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

