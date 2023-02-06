// Whenever you create a JS object, JS engine automatically without even letting you know
// attaches your object with some hidden properties and functions and can be accessed with .(period);
// This is not just the case with objects but with functions as well. Functions get access to a lot of 
// other things. Funcions are objects as well, even variables. All these get access to some of the hidden
// properties and methods. This come via PROTOTYPE.

// PROTOTYPE: Whenever you create any object, JS engine automatically puts these hidden properties into an object
// and attaches it to your object.

// arr has its proto(arr.__proto__) which is equivalent to Array.prototype and even arr.__proto__  has its own proto
// (arr.__proto__.__proto__) which is equivalent to Object.prototype. arr.__proto__.__proto__.__proto__ is null 
// which is the end of the chain

let arr = ["Joe", "John"]; 
let object = {
    name: 'Joe',
    city: 'New-York',
    getIntro: function(){
        console.log(this.name + " from " + this.city); // object.__proto__ ~ Object.prototype
    }
}

function fun(){
    // fun.__proto__.__proto__ ~ Object.prototype
}

// Hence, everything in javscript is nothing but object. So whether you make an object, function it is down the prototype 
// chain ends up being an object. This is prototype chain and ends up being at null.

let object2 = {
    name: "John"
}
// object.__proto__ ~ Object.__proto__

// Never do this. Never modify your prototype this way
// object2.__proto__ points to object
// Object2 inherits from object through prototype inheritance
object2.__proto__ = object;

// When you try to access the property, say city here, it will check on the top of the main object. In this case it 
// finds city in object2, if it doesnt find it, it goes to the proto. If it doesnt find it inside that proto, it will go to 
// the proto of proto and thats how it goes throughout the chain.
console.log(object2.city);
object2.getIntro();

Function.prototype.mybind = function(){
    console.log("Binding mybind method to Function's prototype. Now every function will have access to mybind method");
}

function fun(){

}

function fun2(){
    
}