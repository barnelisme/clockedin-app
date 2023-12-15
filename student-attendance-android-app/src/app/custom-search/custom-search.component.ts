import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  selectedAttribute:any = {
    faculty:'',
    department:'',
    subjectCode:'',
    user:'',
    attendee:'',
    date:'',
    weekday:''
  }

  selectedMetric:any = {
    distinctAttendee:'',
    distinctSubjectCode:'',
    distinctDepartment:'',
    distinctUser:'',
    distinctDate:'',
    distinctWeekday:''
  }

  selectedOptionalFilter:any = {
    none:'',
    faculty:'',
    department:'',
    subjectCode:'',
    user:'',
    attendee:'',
    date:'',
    weekday:''
  }

  selectedFilter:any = {
    filter:''
  }

  constructor(private http: HttpClient, private service: UserService){}

  ngOnInit():void{

  }

  search(){
    
  }
}
