// prototypal inheritance
function Person(){}
    Person.prototype.cry = function(){
        console.log("Crying");
    }

//
function Child(){}

// we copy the cry property of a person to the cry property of child. When we try to see this 
// relationship using instanceof, we soon realize that just by copying a behaviour, we could not really
// make child an instance of Person, aChild instanceof Person fails. This is just copying or masquerading, not 
// inheritance. Even if we copy all the properties of Person to child, we wont be inheriting from Person.
Child.prototype = {
    cry : Person.prototype.cry
};

var aChild = new Child();
console.log(aChild instanceof Child);
console.log(aChild instanceof Person);
console.log(aChild instanceof Object);

