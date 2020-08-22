import { Router } from 'express';
import UsersRoutes from './users';

const router = Router();

/** Register API routes */
router.use('/users', UsersRoutes);

export default router;
