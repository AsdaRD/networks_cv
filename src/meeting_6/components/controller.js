import './controller.scss';
import { Car } from './car'

export class Controller{
    constructor (target = document.querySelector('body'), speed = 50) {
        this._target = target;
        this._speed = speed;
        this.render();
        this.left();
    }
    render() {
        this._controller = document.createElement('div');
        this._controller.classList.add('controller');

        this._image_left = document.createElement('img');
        this._image_left.src = require('../../../assets/images/left-button.png');
        this._image_left.classList.add('controller__img', 'controller__left');

        this._top_bottom_container = document.createElement('div');
        this._top_bottom_container.classList.add('controller__top_bottom_container');
        
        this._image_top = document.createElement('img');
        this._image_top.src = require('../../../assets/images/top-button.png');
        this._image_top.classList.add('controller__img', 'controller__top');       
        this._image_down = document.createElement('img');
        this._image_down.src = require('../../../assets/images/down-button.png');
        this._image_down.classList.add('controller__img', 'controller__down');

        this._image_right = document.createElement('img');
        this._image_right.src = require('../../../assets/images/right-button.png');
        this._image_right.classList.add('controller__img', 'controller__right');

        this._controller.appendChild(this._image_left);
        this._top_bottom_container.appendChild(this._image_top);
        this._top_bottom_container.appendChild(this._image_down);
        this._controller.appendChild(this._top_bottom_container);
        this._controller.appendChild(this._image_right);

        this._target.appendChild(this._controller);
        
    }
    left() {
        let car = document.querySelector('.car');
        this._image_left.addEventListener('click', () => {
            car.style.marginRight = `${this._speed}px`;
            this._speed = this._speed + 50;
        });
        
    }
}