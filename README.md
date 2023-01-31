# Javascript-Object-Oriented

## Programming Paradigms
Programming paradigm is a classification, style or way of programming. There are lot of programming paradigms like imperative, procedural, functional, declarative, 
objected-oriented, etc. 
To know more about programming paradigms: https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/

Here we are going to talk about object-oriented paradigm in Javascipt. Before we dive into object-oriented in Javascipt, lets first discuss object-oriented paradigm.

## Object-Oriented Paradigm
Object-Oriented is a programming paradigm in computer science that relies on the concept of classes and objects. It is used to structure a software program into simple, 
reusable pieces of code blueprints(usually called classes), which are used to create individual instances of objects. There are many object-oriented programming languages 
like Javascript, C, C++, Java and Python.

Some languages like Javascript, Python, PHP all allow both procedural and object-oriented programming styles.

There are two types of OOP languages:

1. Class-Based languages like JAVA, C++.
2. Prototype-Based languages like JavaScript.

## Benefits of Object-Oriented Programming
* Real world programming
* Ability to simulate real-world events much more effectively
* Reusability of code
* Information hiding
* Maintainance
* Easy partition of work
* Security
* Robustness of system

## Pillars of OOPs
* Abstraction
* Inheritance
* Polymorphism
* Encapsulation

## OOPs in Javascript
### Abstration: 
An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.
#### Advantage:
* Simpler Inerface
* Reduce the Impact of Change
### Inheritance:
We can create classes in JavaScript using all the functionality from another class, which is then called its parent class. The child class will contain all the data variables and data methods, and we can add more to it.

Basically, inheritance empowers us to reuse code efficiently. We can implement inheritance in JavaScript using the extends keyword.
#### Advantage:
* Eliminate redudant code
### Polymorphism:
Polymorphism refers to the concept of reusing a single piece of code multiple times. By utilizing Polymorphism, you can define multiple forms of a method, and depending upon the runtime scenario, one type of object can have different behavior.
Polymorphism has two types.

1. Compile time Polymorphism
2. Runtime Polymorphism

Function Overloading is a type of compile time polymorphism. This is not supported in JS, because if you create functions with same name, JS will override the last defined function with former function.

Method Overriding is a type of runtime polymorphism. Overriding the methods of parent class in child class. 
#### Advantage:
* Allows to get rid of long if and else or switch case statements.
### Encapsulation: 
Encapsulation wraps the data variables and data functions/methods together inside a single box/unit. This pillar of oops ensures that oops classes and object resembles real-world objects. In encapsulation, we group data and actions together so that data can be secured.
#### Advantage:
* Group related functions and variables and this way we can reduce complexity

## Is JavaScript Object-Oriented?
We need to understand the difference between OOP and Prototype-based programming, before finding the answer to this common question - ' Is JavaScript Object-oriented?'.

Object-Oriented Programming (OOP) The object-oriented paradigm keeps data and actions grouped together inside classes. In OOP, we create classes and then create their instances called objects.

Prototype-based Programming In Prototype-based programming, we derive objects from other already existing objects.( Prototypes are the mechanism by which JavaScript objects inherit features from one another.)

JavaScript is a Prototype-based programming paradigm. It is not an OOP language. But it has support for it. It has the class keyword, which is just a syntactic sugar over prototypes. We actually create prototypes in javascript, and not classes. The class keyword is there to make javascript look like an OOP language.

Everything in JavaScript is an object. If you create an array, and then console it, you will find various key value pairs inside it, for example, you'll find the length property, which we never defined.

Everything in JS is an object. Everything we define in javascript, be it an array, or a function, it extends the functionality from the prototype object.

## Helpful Links

* [Javascript OOPs 1](https://www.scaler.com/topics/javascript/oops-in-javascript/)
* [Javascript OOPs 2](https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn)
