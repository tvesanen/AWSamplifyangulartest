import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import awsconfig from '../aws-exports';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(public amplifyService: AmplifyService) {
  }


  getLoginStatus(): Observable<any> {

      return this.amplifyService.authStateChange$

    }

  logout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }


}
