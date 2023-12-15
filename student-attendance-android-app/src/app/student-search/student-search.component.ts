import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { studentRecord } from './studentRecord';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit,AfterViewInit,OnDestroy {

  obs!:Observable<any>;
  displayedColumns: string[] = ['studentNumber', 'actions'];
  dataSource = new MatTableDataSource<string>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy():void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    
    this.dataSource.filterPredicate = (data: string, filter: string) => {
      return data.toLowerCase().includes(filter);
    };
  
    this.dataSource.filter = filterValue.trim();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
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
        this.dataSource.data = data;
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
      this.suggestedStudentNumbers = this.studentNumbers.filter(index =>
        index.toLowerCase().includes(this.typedStudentNumber.toLowerCase())
      );
    } else {
      this.suggestedStudentNumbers = [];
    }
  }

  onSelectSuggestedStudentNumber(index: string) {
    this.typedStudentNumber = index;
    this.suggestedStudentNumbers = [];
  }

  selectStudent(studentNumber: string): void {

    const dataToSend = {
      faculty: this.selectedFaculty,
      department: this.selectedDepartment,
      subject: this.selectedSubject,
      studentNumber: studentNumber,
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
