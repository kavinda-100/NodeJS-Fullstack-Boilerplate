import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from "path"
// import {fileURLToPath} from "url"

import MainRoute from "./mainRoute";
import errorHandler from "./lib/errorHnadeller";

dotenv.config();
const app = express();

// import.meta meta-property is only allowed when the --module option is es2020, es2022, esnext, system, node16, or nodenext
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World!' });
});

// routes
app.use('/api/v1', MainRoute);

// frontend
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

