import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUser } from './login-user';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {

  userlist: LoginUser[] = [];

  loginObj: LoginUser = {
    name:'',
	  surname: '',
	  id: '',
	  number: '',
	  email: '',
	  password: '',
    position:'',
	  userDevice: ''
  };

  constructor(private router: Router, private http: HttpClient, private service: UserService){}

  ngOnInit(): void {
    this.service.getAdmins().subscribe((data: LoginUser[]) => {
      this.userlist = data;
    });
  }

  login() {
    const loginEmail = this.loginObj.email.toLowerCase();
    const loggedUser = this.userlist.find((user) => {
      const userUserID = user.email.toLowerCase();
      return userUserID === loginEmail && user.password === this.loginObj.password;
    });
  
    if (loggedUser) {
      const userPosition = loggedUser.position.toLowerCase();
  
      if (userPosition === 'admin' || userPosition === 'user') {
        this.router.navigate(['/admin-layout']);
      } else {
        this.router.navigate(['/manager']); 
      }
    } else {
      alert('Wrong Credentials. Please try again!');
    }
  } 
}
