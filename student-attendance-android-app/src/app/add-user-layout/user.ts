export class user{

    name:String;
    surname:String;
    id:String;
    number:String;
    email:String;
    password:String
    user_device:String;
    position:String;

    constructor(name: String, surname: String, id: String, number: String, email: String, password: String, user_device: String, position:String){
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.number = number;
        this.email = email;
        this.password = password;
        this.user_device = user_device;
        this.position = position;
    }
}