import './dropdown.scss';
import { Elem } from './dropdown_elem';

export class Dropdown {
    constructor(target = document.querySelector('body')){
        this._target = target;
        this.render();
    }

    render() {
        this._container = document.createElement('div');
        this._container.classList.add('dropdown');

        this._button = document.createElement('button');
        this._button.classList.add('dropdown__head');

        this._button_text = document.createElement('p');
        this._button_text.textContent = 'SORT BY';
        this._button.addEventListener('click', () => {
            if(this._list.style.display === 'block') {
                this._list.style.display = 'none';
            } else {
                this._list.style.display = 'block';
            }
        });

        this._arrow = document.createElement('img');
        this._arrow.classList.add('dropdown__arrow');
        this._arrow.src = require('../../../assets/images/down-arrow.svg')

        this._list = document.createElement('ul');
        this._list.classList.add('dropdown__list');
        
        this._elem_name = new Elem(this._list, 'Name');
        this._elem_date = new Elem(this._list, 'Date');
        this._elem_price = new Elem(this._list, 'Price');
        this._elem_size = new Elem(this._list, 'Size');
        

        this._container.appendChild(this._button);
        this._button.appendChild(this._button_text);
        this._button.appendChild(this._arrow);
        this._container.appendChild(this._list);

        
        this._target.appendChild(this._container);
    }
}