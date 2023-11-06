import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {

  faculties: string[] = [];
  departments: string[] = [];
  subjects: string[] = [];

  selectedFaculty: string = '';
  selectedDepartment: string = '';
  selectedSubject: string = '';
  
  studentNumbers: string[] = [];
  typedStudentNumber: string = '';
  suggestedStudentNumbers: string[] = [];

  studentRecord: any;
  studentAttendanceRate:any;

  student:any = {
    faculty:'',
    department:'',
    subject:'',
    studentNumber:'',
    attendanceRate:''
  }

  constructor(private http: HttpClient, private service: UserService){}

  ngOnInit():void{
    this.service.getAllStudents().subscribe(
      (data:string[]) => {
        this.studentNumbers = data;
      },
      (error) => {
        console.error('Could not fetch student numbers:', error);
      }
    );

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
  
  onStudentNumberInput() {
    if (this.typedStudentNumber) {
      this.suggestedStudentNumbers = this.studentNumbers.filter(number =>
        number.toLowerCase().includes(this.typedStudentNumber.toLowerCase())
      );
    } else {
      this.suggestedStudentNumbers = [];
    }
  }

  onSelectSuggestedStudentNumber(number: string) {
    this.typedStudentNumber = number;
    this.suggestedStudentNumbers = [];
  }

  sendDataToSearch(){

    const dataToSend = {
      faculty: this.selectedFaculty,
      department: this.selectedDepartment,
      subject: this.selectedSubject,
      studentNumber: this.typedStudentNumber,
    };

    this.service.sendSelectedData(dataToSend).subscribe(
      (response) => {
        this.studentRecord = response;
        this.student.faculty = response.faculty;
        this.student.department = response.department;
        this.student.subject = response.subject;
        this.student.studentNumber = response.studentNumber;
        this.student.attendanceRate = response.attendanceRate;
      },
      (error) => {
        console.error('Error sending data to Spring Boot:', error);
      }
    );
  }
}
