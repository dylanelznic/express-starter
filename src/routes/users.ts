import { db } from 'db';
import { Request, Response, Router } from 'express';
import { UsersService } from 'services';

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
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await db.users.all();
      console.log('users', users);
      return res.send(users);
    } catch (e) {
      console.log(e);
      return res.status(500).send('An error occured while fetching users');
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
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const userId = req.params.userId;
      const reverse = req.query.reverse === '1';
      const user = await db.users.byId(userId);

      if (reverse) {
        const usersService = new UsersService();
        const nameReversed = usersService.getUserNameReversed(user);
        return res.send(nameReversed);
      }

      return res.send(user.name);
    } catch (e) {
      console.log(e);
      const userId = req.params.userId;
      return res
        .status(500)
        .send(`An error occured while fetching the name for ${userId}`);
    }
  },
);

export default router;