export class studentRecord {

    studentNumber: string;
    faculty: string;
    department: string;
    subject: string; 

    constructor(studentNumber: string, faculty: string, department: string, subject: string){
        this.studentNumber = studentNumber;
        this.faculty = faculty;
        this.department = department;
        this.subject = subject; 
    }
}