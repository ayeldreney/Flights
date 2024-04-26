import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  CurrentUser?: User;

  LoginUser(user: User) {
    console.log("logged in user with email" + user.email)
    this.CurrentUser = user;
  }

}


interface User {
  email: string
}
