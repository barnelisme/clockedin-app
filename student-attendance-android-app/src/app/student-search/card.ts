export class Card {
    tag: string;
    studentNumber: string;
    surname: string;
    name: string;

    constructor(tag: string, studentNumber: string, surname: string, name: string){
        this.tag = tag;
        this.studentNumber = studentNumber;
        this.surname = surname;
        this.name = name;
    }
}