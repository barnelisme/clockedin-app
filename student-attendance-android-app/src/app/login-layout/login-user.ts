export class LoginUser {
    name: String;
	surname: String;
	id: String;
	number: String;
	email: String;
	password: String;
    position:String;
	userDevice: String;

    constructor(name: String, surname: String, id: String, number: String, email: String, password:String, position: String, userDevice: String) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.number = number;
        this.email = email;
        this.password = password;
        this.position = position;
        this.userDevice = userDevice;
      }
}
