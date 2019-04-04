/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: "for never using" is binding the this keyword to the window. the default location of the 'this' keyword and points to the entire JS library ("the entire forest"). "this" by default is binded to the window. "this" by itself doesn't have any binding context! you don't ever want to bind to the window but you need to know that it exists.
* 2. Implicit Binding: "for objects and methods" is automatic binding to objects and methods where the binding context of the object is clear. specifically, you have to look to the left side of the method (where it is invoked) to identify the this keyword (the binding or "tree in the forest" -- left of the dot.
* 3. New Binding: Uses a constructor function where this keyword is a specific instance of an object that is created and returend by the constructor function. 
* 4. Explicit Binding: "for functions" tells a function what the context of the ‘this’ keyword will be using call, apply or bind -- allows us to explicitly state whether the this keyword is going to be in any given function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

    function deadpool (param) {
    console.log(this);
    return `I am not a ${param}`;
     }
  
     console.log(deadpool("superhero"));


// Principle 2

// code example for Implicit Binding

const batman = {
    name: "Bruce Wayne",
    age: 32,
    food: "italian",
    sport: 'soccer',
    play: function() {
      return `${this.name} loves to play ${this.sport}`;
    }
  }

  console.log(batman.play());

// Principle 3

// code example for New Binding

function pizza(store) {
    this.greeting = 'Hello';
    this.stores = store;
    this.speak = function () {
        console.log(`${this.greeting} this is ${this.stores}, your pizza is ready for pickup`);
    }
}

const thehut = new pizza('Pizza Hut');
const dominos = new pizza('Dominos');

thehut.speak();
dominos.speak();



// Principle 4

// code example for Explicit Binding

const person = {
    "name":"Deadpool"
  }
  
  function fruits(Apples, Oranges, Bananas) {
      return `hello, my name is ${person.name} and my favourtite fruits are: ${Apples}, ${Oranges}, ${Bananas}`;
  }

  console.log(fruits.call(person, "Apples", "Oranges", "Bananas"))