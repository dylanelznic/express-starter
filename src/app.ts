import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import routes from 'routes';
import { ResponseError, expressLogger, handleError } from 'utils';

/** Initialize Express */
const app = express();

/** Register express pino logger */
app.use(expressLogger);

/** Register logging for every request */
app.use((req: Request, res: Response, next: NextFunction) => {
  req.log.info('request sent');
  next();
});

/** Register CORS middleware */
app.use(cors());

/** Register helmet middleware */
app.use(helmet());

/** Register API routes */
app.use('/v1', routes);

/** Register error handling middleware */
app.use(
  (err: ResponseError, req: Request, res: Response, _next: NextFunction) => {
    handleError(err, res);
  },
);

export default app;
