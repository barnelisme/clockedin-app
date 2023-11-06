export class formData{
    startDate: Date;
    endDate: Date
    subject: String

    constructor(startDate: Date, endDate: Date, subject: String){
        this.startDate = startDate;
        this.endDate = endDate;
        this.subject = subject;
    }
}