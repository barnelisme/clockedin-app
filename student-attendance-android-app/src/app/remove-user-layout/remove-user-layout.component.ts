import { Component, OnInit } from '@angular/core';
import { user } from '../add-user-layout/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remove-user-layout',
  templateUrl: './remove-user-layout.component.html',
  styleUrls: ['./remove-user-layout.component.css']
})
export class RemoveUserLayoutComponent implements OnInit {

  
  user: user = {
    name:'',
    surname:'',
    id:'',
    number:'',
    email:'',
    password:'',
    user_device:'NA',
    position:''
  };

  constructor(private http: HttpClient, private service: UserService, private router: Router){};
  
  ngOnInit(): void {
    
  }

  removeUser(){
    /*
    console.log(this.user.id);
    this.service.removeUser(this.user).subscribe(
      (error) => {
        console.error('Error sending data to Spring Boot:', error);
      },
      (response) => {
        alert("User successfully removed!");
        this.router.navigate(['/manager']); 
      }
    );
    */
  }
}
