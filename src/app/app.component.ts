import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify';

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

  constructor(private amplifyService: AmplifyService) {

    this.amplifyService.authStateChange$
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
      Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}
