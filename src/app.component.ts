import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retkellä';
  signedIn: boolean;
  user: any;
  username: string;



  constructor(private loginService: LoginService) {

    }

  ngOnInit() {
      this.getLoginStatus();
    }

  getLoginStatus() {
      this.loginService.getLoginStatus()
          .subscribe(authState => {
              this.signedIn = authState.state === 'signedIn';
              if (!authState.user) {
                  this.user = null;
              } else {
                  this.user = authState.user;
                  this.username = this.user.username;
              }
      });
    }

    onLogout() {
      this.loginService.logout();
    }
}
