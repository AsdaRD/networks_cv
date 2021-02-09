import './lesson_12.scss';
import { greetWidget } from './components/greet';
import { list } from './components/list';

const button = document.querySelector('#btn');
const content = document.querySelector('.content');
button.onclick = () => {
    greetWidget(content);
}

function analize() {
    const buttons = document.querySelectorAll('button');
    let i = 0;
    for(let button of buttons) {
        button.addEventListener('click', () => {
            i++;
            console.log(i);
        });
    }
}

list();
analize();  


