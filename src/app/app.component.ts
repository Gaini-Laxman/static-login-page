import { Component } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  username: string = "";
  password: string = "";
  msg: string = "";

  constructor(private loginService: LoginService) {}

  checkLogin(): void {
    if (this.loginService.checkLogin(this.username, this.password) === 'Login successful!') {
      this.msg = "Login Successful...";
    } else {
      this.msg = "Invalid Credentials...";
      //txt1.focus();
    }
  }
}
