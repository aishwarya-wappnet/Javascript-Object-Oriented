function Employee(){
    this.name = '';
    this.dept = 'None';
    this.salary = '0.0';
}

function Manager(){
    // this is analogous to the super() method call in the constructor.
    // the call() method  calls a function with a specific object as its context 
    Employee.call(this); 
    this.reports = [];
}

// Object.create() creates an object with a specified prototype. When we do new Parent(), 
// the construct logic of the parent is called. In most cases, what we want is for Child.prototype
// to be an object that is linked via its prototype to Parent.prototype. If the parent contructor 
// contains the additional logic speciifc to the parent, we dont want to run this while creating the child object. 
// this can cause very difficul-to-find bugs. Object.create() creates the same prototypal link between the child and 
// parent as the new operator without calling the parent constructor.
Manager.prototype = Object.create(Employee.prototype);

function IndividualContributor(){
    Employee.call(this);
    this.active_projects = [];
}
IndividualContributor.prototype = Object.create(Employee.prototype);

function TeamLead(){
    Manager.call(this);
    this.dept = "Software";
    this.salary = 100000;
}
TeamLead.prototype = Object.create(Manager.prototype);

function Engineer(){
    TeamLead.call(this);
    this.dept = "Javascript";
    this.desktop_id = "8822";
    this.salary = 80000;
}
Engineer.prototype = Object.create(Employee.prototype);

// instantiate a generic employee
var genericEmployee = new Employee();
console.log(genericEmployee);

// instantiate a manager
var Karen = new Manager();
Karen.name = "Karen";
Karen.reports = [1, 2, 3];
console.log(Karen);

// instantiate a teamlead
var jason = new TeamLead();
// jason.name = "Jason";
console.log(jason);


// When javascript process the new opertaor, it creates a new object and passes this 
// object as the value of this to the parent - the TeamLead constructor. The constructor 
// function sets the value of the projects property and implicitly sets the value of the
// internal __proto__ property to the value of TeamLead.prototype. The __proto__ property 
// determines the prototype chain used to return property values. This process does not set 
// values for properties inherited from the prototype chain in the jason object. When the value
//  of the property is read, Javascipt first checks to see wheather the value exits in that obejcts.
// If the value does exist, this value is returned. If the value does not exist JS checks the prototype
// chain using the __proto__ property. Having said this, what happens when we do the following:

Employee.prototype.name = "Undefined";

// it does not propogate to all the instances of Employee. This is beacause when you create an instance of 
// the Employee object, this instance gets a local value for the name. When you set the TeamLead prototype 
// be creating a new Employee object, TeamLead.prototype has a local value for the name property of the jason object,
// which is an instance of TeamLead, it finds the local value for this property in TeamLead.prototype. It does not try
// to do further lookups up the chain to Employee.prototype.




