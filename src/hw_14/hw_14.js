import './hw_14.scss';
import { Button } from './components/button';
import { Modal } from './components/modal';

const modalWindow = new Modal();


for(let i = 0; i < 5; i++) {
    const btn = new Button(undefined, `Button ${i+1}`, () => {
        modalWindow.show(`Hello from Button ${i+1}`);
    })
    
}


