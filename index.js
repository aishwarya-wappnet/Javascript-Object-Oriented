class User{
    name;
    email;
    #password;
    constructor(){
    }
    #validateEmail(email){
        return true;
    }
    #validatePassword(password){
        return true;
    }
    signUp(name, email, password){
        let isValidated = false;
        isValidated = this.#validateEmail(email);
        console.log(isValidated);
        isValidated &&= this.#validatePassword(password);
    if(isValidated){
        this.name = name;
        this.email = email;
        this.#password = password;
        console.log('User is registered');
    }else{
        console.log('Please enter correct details');
    }
    }
    login(username, password){
        if(this.username === username && this.#password === password)
        console.log('Login Successfull');
        else console.log('Authentication Failed');
    }
    #isRegisteredUser(email){
        return true;
    }
    resetPassword(email, newPassword){
        if(this.#isRegisteredUser(email)){
            this.#password = newPassword;
            console.log('Password changed successfully');
        }else{
            console.log('No account found');
        }
    }
}

const user1 = new User;
user1.signUp('John_doe', 'johndoe@gmail.com', 'john123');
const user2 = new User;
user2.signUp();
user1.resetPassword('johndoe@gmail.com', 'john');
