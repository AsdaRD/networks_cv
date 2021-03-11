import { Button } from './button.js'
import './modal.scss'

export class Modal {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._render(); 
    }
    _render() {
        this._ModalOutlet = document.createElement('div');
        this._ModalContent = document.createElement('div');

        this._ModalOutlet.classList.add('Modal__Outlet');
        this._ModalContent.classList.add('Modal__Content');

        this._target.appendChild(this._ModalOutlet);
        this._ModalOutlet.appendChild(this._ModalContent);
        this._hideBtn = new Button(this._ModalOutlet, 'Close', () =>{
            this.hide()
        });
    }
    show(content) {
        this._ModalOutlet.classList.add('Modal__Outlet__active');
        this._ModalContent.textContent = content;
    }
    hide() {
        this._ModalOutlet.classList.remove('Modal__Outlet__active');
    }
}