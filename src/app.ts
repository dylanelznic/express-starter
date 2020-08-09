import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { UserRoutes } from 'routes';

/** Initialize Express */
const app = express();

/** Register CORS middleware */
app.use(cors);

/** Register helmet middleware */
app.use(helmet);

/** Register API routes */
app.use('/users', UserRoutes);

export default app;
