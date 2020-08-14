import { UsersService } from '../users';

describe('Users Service', () => {
  it("should reverse a User's name", () => {
    const user = { id: 'test_id', name: 'dylan elznic' };
    const usersService = new UsersService();
    const nameReversed = usersService.getUserNameReversed(user);
    expect(nameReversed).toEqual('cinzle nalyd');
  });
});
