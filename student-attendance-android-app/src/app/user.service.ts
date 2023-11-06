import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from './login-layout/login-user';
import { user } from './add-user-layout/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAdmins(){
    return this.http.get<LoginUser[]>("http://localhost:9001/adminList");
  }

  getStudent(){
    return this.http.get<LoginUser[]>("http://localhost:9001/studentList");
  }

  getEngineeringSubjects(){
    return this.http.get<number>("http://localhost:9001/engineeringSubjects");
  }

  getICTSubjects(){
    return this.http.get<number>("http://localhost:9001/ICTSubjects");
  }

  getAttendees(){
    return this.http.get<number>("http://localhost:9001/attendeesNumber");
  }

  getFacultyTrendData(formData: any) {
    return this.http.post<any>("http://localhost:9001/trendData", formData);
  }

  getFaculties() {
    return this.http.get<string[]>("http://localhost:9001/faculties");
  }

  getDepartmentsForFaculty(faculty: string) {
    return this.http.get<string[]>(`http://localhost:9001/departments/${faculty}`);
  }

  getSubjectsForDepartment(department: string) {
    return this.http.get<string[]>(`http://localhost:9001/subjects/${department}`);
  }

  getAllStudents(){
    return this.http.get<string[]>("http://localhost:9001/studentNumber")
  }

  sendSelectedData(data: any) {
    return this.http.post<any>("http://localhost:9001/studentAttendanceRate", data);
  }

  sendStudentRecord(studentRecord: any) {
    return this.http.post<any>("http://localhost:9001/classlistAttendance", studentRecord);
  } 

  sendStudentDate(studentDate: any) {
    return this.http.post<any>("http://localhost:9001/studentDate", studentDate);
  } 

  addNewUser(data:any){
    return this.http.post<any>("http://localhost:9001/addUser", data);
  }

  removeUser(userId: String) {
    return this.http.post<any>("http://localhost:9001/removeUser", userId);
  }

  getAllUsers(){
    return this.http.get<user[]>("http://localhost:9001/userlist");
  }
}
 