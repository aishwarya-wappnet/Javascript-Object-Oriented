function Person(){

}

Person.prototype.cry = function(){
    console.log("Crying");
}

function Child(){

}

// the below line uses an instance of Person as the prototype of Child
Child.prototype = new Person();
var aChild = new Child();
console.log(aChild instanceof Child);
console.log(aChild instanceof Person);
console.log(aChild instanceof Object);



