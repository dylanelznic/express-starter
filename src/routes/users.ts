import { db } from 'db';
import { NextFunction, Request, Response, Router } from 'express';
import { UsersService } from 'services';
import { ResponseError } from 'utils';

const router = Router();

/**
 * /users:
 *   get:
 *     description: Return a list of all Users from the DB
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfuly returned a list of all Users
 *       500:
 *         description: Error fetching Users from the DB
 */
router.get(
  '/',
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    try {
      const users = await db.users.all();
      return res.send(users);
    } catch (e) {
      next(e);
    }
  },
);

/**
 * /users/{userId}:
 *   get:
 *     description: Return the User for the passed in User id
 *     parameters:
 *       - name: userId
 *         description: The id of the User to fetch
 *         in: path
 *         type: string
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfuly returned the User
 *       500:
 *         description: Error returning the User
 */
router.get(
  '/:userId',
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    try {
      const userId = req.params.userId;
      const user = await db.users.byId(userId);

      if (!user) {
        throw new ResponseError('User not found', 404);
      }

      return res.send(user);
    } catch (e) {
      next(e);
    }
  },
);

/**
 * /users/{userId}/name:
 *   get:
 *     description: Return the name for the passed in User id
 *     parameters:
 *       - name: userId
 *         description: The id of the User whose name to fetch
 *         in: path
 *         type: string
 *         required: true
 *       - name: reverse
 *         description: Flag determining whether or not to reverse the name
 *         in: query
 *         type: string (1 = 'True')
 *         required: false
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfuly returned the name of the User
 *       500:
 *         description: Error returning the User's name
 */
router.get(
  '/:userId/name',
  async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> => {
    try {
      const userId = req.params.userId;
      const reverse = req.query.reverse === '1';
      const user = await db.users.byId(userId);

      if (!user) {
        throw new ResponseError('User not found', 404);
      }

      if (reverse) {
        const usersService = new UsersService();
        const nameReversed = usersService.getUserNameReversed(user);
        return res.json({ name: nameReversed });
      }

      return res.json({ name: user.name });
    } catch (e) {
      next(e);
    }
  },
);

export default router;
