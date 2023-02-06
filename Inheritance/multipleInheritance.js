// inheritance as a concept in javascipt is totally different than other languages

class Person{
    constructor(name){
        this.name = name;
        this.occupation = "unemployeed";
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(name){
        console.log('I am student');
        super(name);
        this.occupation = 'Student';
    }
}

class Teacher extends Student{
    constructor(name){
        console.log('I am teacher');
        super(name);
        this.occupation = 'Teacher';
        this.salary = "10k";
    }
}

let student = new Student('jack');
student.greet();
console.log(student.occupation);
let teacher = new Teacher('Joe');
teacher.greet();
// to access the prototype of objects created using class approach, <object name>.__proto__
let person = new Person();

// to access the prototype of objects created using functional approach, <function-name>.prototype
function p(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

// the function property getFirstName is injected from outside of the actual defination, without touching 
// the actual defination

p.prototype.getFirstName = function(){
    console.log(`FirstName: ${this.firstName}`)
}

let p1 = new p('Joe', 2);
p1.getFirstName();
