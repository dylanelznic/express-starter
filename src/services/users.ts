import { User } from 'db/models';

/** Services functions for Users */
export class UsersService {
  /**
   * Return the reversed name of a User
   *
   * @param user - The User to return a reversed name for
   */
  getUserNameReversed = (user: User): string => {
    return user.name.split('').reverse().join('');
  };
}
