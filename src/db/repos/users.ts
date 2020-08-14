import { ColumnSet, IDatabase, IMain } from 'pg-promise';

import { User } from '../models';
import { users as sql } from '../sql';

/** DB access for the Users table */
export class UsersRepository {
  /** Read-only structure with query-formatting columns */
  cs: ColumnSet;

  /**
   * @param db - Automated database connection context/interface.
   * @param pgp - Pg-promise root
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private db: IDatabase<any>, private pgp: IMain) {
    this.cs = new pgp.helpers.ColumnSet(['id', 'name'], {
      table: 'users',
    });
  }

  /** Select all Users, returning a list of Users */
  all = async (): Promise<User[]> => {
    return this.db.many(sql.all);
  };

  /**
   * Select a User by id, returning the User or null
   *
   * @param id - The id of the User to select
   */
  byId = async (id: string): Promise<User | null> => {
    return this.db.oneOrNone(sql.byId, id);
  };

  /**
   * Select a User by name, returning the User or null
   *
   * @param name - The name of the User to select
   */
  byName = async (name: string): Promise<User | null> => {
    return this.db.oneOrNone(sql.byName, name);
  };

  /**
   * Delete a User, returning the id of the deleted user
   *
   * @param id - The id of the User to delete
   */
  delete = async (id: string): Promise<string> => {
    return this.db.result(sql.delete, id);
  };

  /**
   * Insert a new User, returning the new User
   *
   * @param user - The User to insert
   */
  insert = async (user: User): Promise<User> => {
    const query = this.pgp.helpers.insert(user, this.cs);
    return this.db.one(query);
  };

  /**
   * Insert a list of new Users, returning the list of new Users
   *
   * @param users - The list of Users to insert
   */
  insertMany = (users: User[]): Promise<User[]> => {
    const query = this.pgp.helpers.insert(users, this.cs);
    return this.db.result(query);
  };

  /**
   * Update a User, returning the udpated object
   *
   * @param user - The User to update
   */
  update = async (user: User): Promise<User> => {
    const query = this.pgp.helpers.update(user, this.cs);
    return this.db.one(query);
  };

  /**
   * Update a list of Users, returning the list of udpated objects
   *
   * @param users - The list of Users to update
   */
  updateMany = async (users: User[]): Promise<User[]> => {
    const query = this.pgp.helpers.update(users, this.cs);
    return this.db.result(query);
  };
}
