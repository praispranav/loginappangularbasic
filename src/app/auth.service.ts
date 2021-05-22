import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  password: string;

  constructor() { 
    this.username = "admin"
    this.password = "admin"
  }

  login(username: string, password: string):any{

    let response: any = ''

    if(username == this.username && password == this.password){
      response = {
        data: 'Login Sucess',
        type: true
      }
    }

    else{
      response = {
        data: "An Error Occured While LogIn" ,
        type: false
      }
    }
    
    return response
  }
}
