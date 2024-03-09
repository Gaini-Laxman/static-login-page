import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checkUnameAndPwd(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  users: User[] = [
    new User("john", "john@123"),
    new User("smith", "smith@123"),
    new User("ashok", "ashok@123"),
    new User("anitha", "anitha@123")
  ];

  constructor() { }

  checkLogin(username: string, password: string): string {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      return 'Login successful!';
    } else {
      return 'Invalid username or password.';
    }
  }
}
