// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  msg: string = '';

  checkLogin(): void {
    // Implement login logic here
    // For demonstration purposes, assume login is successful if username and password are not empty
    if (this.username && this.password) {
      this.msg = 'Login successful!';
    } else {
      this.msg = 'Invalid username or password.';
    }
  }
}
