import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-classlist-search',
  templateUrl: './classlist-search.component.html',
  styleUrls: ['./classlist-search.component.css']
})
export class ClasslistSearchComponent implements OnInit{

  faculties: string[] = [];
  departments: string[] = [];
  subjects: string[] = [];

  selectedFaculty: string = '';
  selectedDepartment: string = '';
  selectedSubject: string = '';

  toDate:Date = new Date;

  students: any[] = [];
  studentDate: any = null;

  studentNumber:any;
  subject:any;

  constructor(private http: HttpClient, private service: UserService){}

  ngOnInit():void{

    this.service.getFaculties().subscribe(
      (data: string[]) => {
        this.faculties = data;
      },
      (error) => {
        console.error('Could not fetch faculties:', error);
      }
    );
  }

  onFacultySelected(faculty: string): void {
    this.service.getDepartmentsForFaculty(faculty).subscribe(
      (data: string[]) => {
        this.departments = data;
      },
      (error) => {
        console.error('Could not fetch departments:', error);
      }
    );
  }
  
  onDepartmentSelected(department: string): void {
    this.service.getSubjectsForDepartment(department).subscribe(
      (data: string[]) => {
        this.subjects = data;
      },
      (error) => {
        console.error('Could not fetch subjects:', error);
      }
    );
  }
  
  onSearch(){
    const dataToSend = {
      faculty: this.selectedFaculty,
      department: this.selectedDepartment,
      subject: this.selectedSubject,
    };

    this.service.sendStudentRecord(dataToSend).subscribe(
      (response) => {
        this.students = response; 

        const data = {
          subject: this.selectedSubject,
          date: this.toDate
        };

        console.log(data);

        this.service.sendStudentDate(data).subscribe(
          (response) => {
            this.studentDate = response;
          },
          (error) => {
            console.error('Error sending data to Spring Boot:', error);
          }
          );
      },
      
      (error) => {
        console.error('Error sending data to Spring Boot:', error);
      }
    );
  }
}
