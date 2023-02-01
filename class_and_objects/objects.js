var author = {
    firstname : "Douglas",
    lastname : "Crockford",
    book : {
        title : "Javascript",
        pages : "172"
    }
};

// accessed by using array-like notation
 
console.log(author['firstname']); 

// accesssd by dot notation

console.log(author.firstname); 

// attempt to retrieve a non-existent value

console.log(author.age || "Age not found");

// update values of an object by assigning a new value to the property
author.book.pages = 45;
console.log(author.book.pages);

// methods are properties of an object that can hold funtion values as follows:

var meetingRoom = {};
meetingRoom.book = function(roomId){
    console.log("Booked meeting room: " + roomId)
}
meetingRoom.book(3);

// this in javascript.

// this refers to window obejct
console.log(this);

// when this is used in object method, this is assigned or bound to the enclosing object
var f = {
    name : "f",
    func: function(){
        return this;
    }
}
console.log(f.func());

// this refers to window object as function is defined in global context.
// When there is no context: A function, when invoked withour any object, does not get any context. By default, it is bound
// to the global context. When you use this in such a funtion, it is also bound to the global context.
function Player(){
    return this;
}
console.log(Player());

// When this is used in a constructor function: When a function is called with a new keyword, it acts a constructor. In this case of a 
// constructor, this points to the object being constructed.
const player = new Player();
console.log(player);

// Instance properties vs prototype properties
// Instance properties are those properties that are part of the object instance itself
function Player(){
    this.isAvailable = function(){
        return 'Instance method says - he is hired';
    }
}
Player.prototype.isAvailable = function(){
    return 'Instance method says - he is NOT hired';
}

var crazyBob = new Player();
// 'Instance method says - he is hired' is printed. The isAdvailable() function defined in the player() function is called an instance of player. This means that apart
// attaching properties via the prototype, you can use this keyword to initialize properties in a constructor. When we have the same fucntions defined as an instance property 
// and also an prototype, the instance property takes precedence.
console.log(crazyBob.isAvailable());

// 

function Player2(){
    isAvailable = false;
}

var crazyBob2 = new Player2();
Player2.prototype.isAvailable = function(){
    return isAvailable;
};

console.log(crazyBob2.isAvailable());

