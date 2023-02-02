// if you want the value of a property changed at runtime and have the new value be inherited
// by all the descendants of the object, you cannot define the property in the objects constructor
// function. To achive this, you need to add it to the constructor's prototype.

function Employee(){
    this.dept = 'None';
    this.salary = 0.00;
}

Employee.prototype.name = '';

function Manager(){
    this.reports = [];
}

Manager.prototype = new Employee();
var sandy = new Manager();
var karen = new Manager();
sandy.name = "sandy"
Employee.prototype.name = "Junk";

console.log(sandy.name);
console.log(karen.name);

// The name property of both sandy and karen has changed to Junk. This is because the name property is
// declared outside the constructor function. So, when you change the value of name in the Employees prototype, 
// it propogates to all the descendants. 
