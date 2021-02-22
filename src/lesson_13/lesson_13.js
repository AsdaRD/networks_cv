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
class User {
    constructor(firstName, SecondName, email, age) {
        this.firstName = firstName;
        this.SecondName = SecondName;
        this.email = email;
        this.newField = 'human';
        this.age = age;
    }

    greet() {
        return `Hello my name is ${this.firstName} ${this.SecondName}`;
    }
    test() {
        console.log('Hello world');
    }
}

//Object
const users = [
    new User('Vasya', 'Ivanov', 'vasya@gmail.com', 20),
    new User('Jack', 'Daniels', 'vasya@gmail.com', 20), 
    new User('John', 'Doe', 'vasya@gmail.com', 20), 
    new User('Tony', 'Stark', 'vasya@gmail.com', 20), 
];
const body = document.querySelector('body');

for(const user of users) {
    const div = document.createElement('div');
    div.innerHTML = `<h4>${user.greet()}</h4>`;
    body.appendChild(div);
}

