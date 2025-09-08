//Q1 Square Function
const square = (x) => x * x;
console.log("square of 5:", square(5));

//Q2 Array of Names
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greet());

//Q3 Multiply Function
const calculate = (a, b, operation) => {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b !== 0 ? a / b : "Error: Division by zero";
    default:
      return "Error: Invalid operation";
  }
};
console.log("add:", calculate(10, 5, "add"));
console.log("subtract:", calculate(10, 5, "subtract"));

//Q4 Even Numbers
const numbers = [2, 5, 8, 11, 14, 17];
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens);

//Q5 Double Numbers
const nums = [2, 5, 8];
const doubled = nums.map((num) => num * 2);
console.log("Doubled numbers:", doubled);

//Q6 Sum of Numbers
const values = [10, 20, 30, 40];
const sum = values.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//Q7 Return Object
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 30));

//Q8 Lexical this
function Counter() {
  let count = 0;
  setInterval(() => {
    console.log(++count);
  }, 1000);
}
//const counter = new Counter();

//Q9 Default Parameters
const power = (base, exponent = 2) => base ** exponent;
console.log(power(5));
console.log(power(2, 3));
console.log(power(3, 4));

// Filter scores > 50
const passed = [45, 67, 89, 23, 56].filter((score) => score > 50);

// Convert to Strings 
const result = passed.map(score => `passed: ${score}`);
console.log(result);

//Prototypes and Inheritance
function Car(name, model) {
  this.name = name;
  this.model = model;
}
Car.prototype.honk = function () {
  console.log(`${this.name} goes Beep Beep! ${this.model}`);
};

//OBJECTS AND INHERITANCE
// Example 1
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

// Example 2
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.introduce();
person2.introduce();

// Example 3
function Animal(name, species) {
  this.name = name;
  this.species = species;
}
Animal.prototype.makeSound = function () {
  console.log(`${this.name} the ${this.species} makes a sound.`);
};

const animal1 = new Animal("Leo", "Lion");
const animal2 = new Animal("Molly", "Cat");

animal1.makeSound();
animal2.makeSound();

// Example 4
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getDetails = function () {
  return `${this.title} by ${this.author}`;
};

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

console.log(book1.getDetails());
console.log(book2.getDetails());

// Example 5
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(3, 7);

console.log("Area of rect1:", rect1.getArea());
console.log("Area of rect2:", rect2.getArea());