import './lesson_12.scss';
import { greetWidget } from './components/greet';

const button = document.querySelector('#btn');
const content = document.querySelector('.content');
button.onclick = () => {
    greetWidget(content);
}



