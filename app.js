// // const person = {
// //     name: 'Alice',
// //     greet: function() {
// //         console.log(`Hello, my name is ${this.name}`);
// //     }
// // };
// // person.greet(); // Output: Hello, my name is Alice

// //the This keyword is a special variables that determines by how function is called

// //ARROW FUNCTIONS
// /* Arrow functions is a shorter way to write functions in JavaScript.
// They do not have their own 'this' context, instead they inherit 'this' from the surrounding lexical scope.*/

// const user = {
//     name: 'Bob',
//     technologies: ['JavaScript', 'React', 'Node.js'],
//     printTech: function() {
//         this.technologies.forEach((tech) => {
//             console.log(`${this.name} works with ${tech}`);
//         });
//     }
//     };
//     user.printTech();

// //EXAMPLEs

// function add(a, b){
//     return a + b;
// };

// const add = (a, b) => a + b;
// add(4, 6);

// const greet = () => console.log("Hello World!");
// console.log(greet());

// const square = x => x * x;
// square(5);

const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

const person = (name, age) => ({ name, age });
console.log(person("Micheal", 28));

// Using array (map)
const numbers = [1, 2, 3, 4];
const squares = numbers.map((n) => n ** 2);
console.log(squares);

//Using array (filter)
const ages = [12, 15, 18, 21, 25, 30, 17, 13];
const adults = ages.filter((age) => age >= 18);
console.log(adults);

//implicit and Explicit arrow functions
const multiplys = (a, b) => a * b;
console.log(multiplys(3, 4));

const multiplyExp = (a, b) => {
  return a * b;
};
console.log(multiplyExp(5, 6));

//Prototypes and Inheritance
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof!`);
};

const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Max", "German Shepherd");

dog1.bark();
dog2.bark();

// classwork

function Car(name, model) {
  this.name = name;
  this.model = model;
}
Car.prototype.honk = function () {
  console.log(`${this.name} goes Beep Beep! ${this.model}`);
};
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.honk();
car2.honk();
