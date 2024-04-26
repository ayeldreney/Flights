import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  CurrentUser?: User;

}


interface User {
  email: string
}
