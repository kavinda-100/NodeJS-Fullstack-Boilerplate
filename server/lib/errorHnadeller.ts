import type {NextFunction, Request, Response} from "express";

export default function errorHandler(err: Error | any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
  next()
}