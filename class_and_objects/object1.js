// Object is the working instance of the class and one or more variables can 
// hold a reference to an instance.

// When you ask the programming language to create an insance of a specific class,
// something happens under the hood. The programming language runtime creates a new 
// instance of the specified type, allocates the necessary memory, and then executes 
// the code specified in the constructor. 
// Constructors are extremely useful to execute setup code and properly initialize a 
// new instance.

// At some point, your application wont need to work with an instance anymore. For eg, once 
// calculate the perimeter of an ellipse and display the results to the user, you dont need 
// the specific Ellipse instance anymore. Some programming languages require you to be careful
// about leaving live instances alive. You have to explicitly destroy them and de-allocate the
// memory that it was consuming.
const myObj = {}
console.log(typeof(myObj));


