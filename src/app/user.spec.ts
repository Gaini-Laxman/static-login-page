import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    // Provide required arguments when creating a new instance
    const user = new User("argument for a", "argument for b");
    expect(user).toBeTruthy();
  });
});
