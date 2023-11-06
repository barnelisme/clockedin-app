import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient, private service: UserService){}

  ngOnInit(): void {
    
  }

  studentSearch(){
    this.router.navigate(['/student-search']);
  }

  classlistSearch(){
    this.router.navigate(['/classlist-search']);
  }

  customSearch(){
    this.router.navigate(['/custom-search']);
  }

}
