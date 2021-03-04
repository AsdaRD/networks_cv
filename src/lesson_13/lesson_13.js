import { render } from 'less';
import './lesson_13.scss';


const fruits = [
    'oranges',
    'bananas',
    'apples'
];

fruits.push('tomatoes');
fruits.pop();


// es6
class Person {
    constructor(firstName, SecondName, email, age) {
        this.firstName = firstName;
        this.SecondName = SecondName;
        this.email = email;
        this.newField = 'human';
        this.age = age;
    }

    greet() {
        return this._createGreetPhrase();
    }
    _createGreetPhrase() {
        return `Hello my name is ${this.firstName} ${this.SecondName}`;
    }
}

class Developer extends Person {
    constructor(firstName, SecondName, email, age, lang) {
        super(firstName, SecondName, email, age);
        this.lang = lang;
    }

    code() {
        console.log('Write code on' + this.lang);
    }
}
// constructor 
// function User(firstName, SecondName, email, age) {
//     this.firstName = firstName;
//     this.SecondName = SecondName;
//     this.email = email;
//     this.newField = 'human';
//     this.age = age;
// }
// prototype
// User.prototype.greet = function () {
//     return `Hello my name is ${this.firstName} ${this.SecondName}`;
// }
// User.prototype.test = function () {
//     console.log('Hello world');
// }

//Object
const users = [
    new Person('Vasya', 'Ivanov', 'vasya@gmail.com', 20),
    new Developer('Jack', 'Daniels', 'vasya@gmail.com', 20, 'js'), 
    new Person('John', 'Doe', 'vasya@gmail.com', 20), 
    new Developer('Tony', 'Stark', 'vasya@gmail.com', 20, 'php'), 
];

console.log(users[0]);
console.log(users[1]);

const body = document.querySelector('body');

for(const user of users) {
    const div = document.createElement('div');
    div.innerHTML = `<h4>${user.greet()}</h4>`;
    body.appendChild(div);
}

