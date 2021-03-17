import './controller.scss';
import { Icon } from './icon.js';

export class Controller{
    constructor (target = document.querySelector('body'), speed = 50) {
        this._speed = speed;
        this._target = target;
        this._margin = 0;
        this.render();
    }
    render() {
        this._car = document.querySelector('.car');

        this._container = document.createElement('div');
        this._container.classList.add('container');

        this._controller = document.createElement('div');
        this._controller.classList.add('container__controller');
        
        this._speedometer = document.createElement('div');
        this._speedometer.classList.add('container__speedometer');
        this._speedometer.textContent = `${this._speed}px/click`

        this._image_left = new Icon(this._controller, require('../../../assets/images/left-button.png'), () => {
            this._car.style.marginRight = `${this._margin + this._speed}px`;
            this._car.classList.add('left')
            this._margin = this._margin + this._speed;
        });
        
        this._top_bottom_container = document.createElement('div');
        this._top_bottom_container.classList.add('container__controller__top_bottom_container');
        
        this._controller.appendChild(this._top_bottom_container);
        this._image_top = new Icon(this._top_bottom_container, require('../../../assets/images/top-button.png'), () => {
            this._speed = this._speed + 50;
            this._speedometer.textContent = `${this._speed}px/click`;
        });
        this._image_down = new Icon(this._top_bottom_container, require('../../../assets/images/down-button.png'), () => {
            this._speed = this._speed - 50;
            this._speedometer.textContent = `${this._speed}px/click`
        });

        this._image_right = new Icon(this._controller, require('../../../assets/images/right-button.png'), () => {
            
            this._car.style.marginRight = `${this._margin - this._speed}px`;
            this._car.classList.remove('left')
            this._margin = this._margin - this._speed;
        });



        this._container.appendChild(this._controller);
        this._container.appendChild(this._speedometer);
        this._target.appendChild(this._container);
    }
}