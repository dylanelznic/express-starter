import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { UserRoutes } from 'routes';
import { ResponseError, handleError } from 'services';

/** Initialize Express */
const app = express();

/** Register CORS middleware */
app.use(cors());

/** Register helmet middleware */
app.use(helmet());

/** Register API routes */
app.use('/users', UserRoutes);

/** Register error handling middleware */
app.use(
  (err: ResponseError, req: Request, res: Response, _next: NextFunction) => {
    handleError(err, res);
  },
);

export default app;
