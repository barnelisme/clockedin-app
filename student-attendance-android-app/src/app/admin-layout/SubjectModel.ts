export class SubjectModel {
    faculty: String;
    facultyNumber: number
    department: number;
    subjectCode: number;
    
    constructor(faculty: String, facultyNumber: number, department: number, subjectCode: number){
        this.subjectCode = subjectCode;
        this.department = department;
        this.faculty = faculty;
        this.facultyNumber = facultyNumber;
    }
}