import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
    });
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then((credential) =>  {
        this.authState = credential.user;
        localStorage.setItem('uid', this.authState.uid);
        console.log(this.authState);
      })
      .catch(error => console.log(error));
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('uid');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('uid');
  }

  currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

}
