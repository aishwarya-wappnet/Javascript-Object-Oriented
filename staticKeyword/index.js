// The Js allows static methods that belong to the class rather than an instance of that class.
// Hence, an instance is not needed to call such static methods. Static methods are called on the
// class directly. It can be of any name. A class can contain more than one static method. If we 
// define more than one static method with the same name, the last method is invoked by JS.

class Cricket{
    // static keyword is used before the function name
    static isAvailable(){
        return "True";
    }
    static hasCelebGirlfriend(){
        return "True";
    }
    static hasCelebGirlfriend(){
        return "False";
    }
    // non-static method
    plays(){
        console.log(Cricket.isAvailable());
    }
}
// static method called using className.functionName. The way the static method is different is that it     
// cannot be accessed by any of the instantiated objects of the class. Rather, the static method can be accessed 
// using the class name because it directly belongs to the class
console.log(Cricket.isAvailable());
// invokes last static method in case if static method have same names
console.log(Cricket.hasCelebGirlfriend());

// invoking non-static method
const obj = new Cricket();
obj.plays();
// Typeerror on accessing static method via object
obj.isAvailable(); 
// Typeerror on accessing non-static method via class
Cricket.plays();

// There is no direct relationship that exists between static method and object. 
// Objects are not allowed to access a static method. Technically speaking, this 
// happens because whenever a static method is defined in a class, the static method essentially gets stored inside the 
// class's constructor. A static method is not stored inside the class's prototype and hence becomes inaccessible for the objects. In JavaScript, objects can access only those members of a class that are stored inside the class's prototype. 