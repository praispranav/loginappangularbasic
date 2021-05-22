import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  response:any;
  login: boolean;
  constructor(private auth:AuthService) {
    this.response =''
    this.login = false
   }

  handleClick(username, password){
    this.response = this.auth.login(username, password)
    this.login = true
  }

  ngOnInit(): void {
  }

}
