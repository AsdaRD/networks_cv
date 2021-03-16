import './controller.scss';
import { Icon } from './icon.js';

export class Controller{
    constructor (target = document.querySelector('body'), speedLeft = 50, speedRight = 50) {
        this._target = target;
        this._speedLeft = speedLeft;
        this._speedRight = speedRight;
        this.render();
        // this.left();
    }
    render() {
        this._car = document.querySelector('.car');
        this._controller = document.createElement('div');
        this._controller.classList.add('controller');

        this._image_left = new Icon(this._controller, require('../../../assets/images/left-button.png'), () => {
            this._car.style.marginRight = `${this._speedLeft}px`;
            this._speedLeft = this._speedLeft + 50;
        });
        
        this._top_bottom_container = document.createElement('div');
        this._top_bottom_container.classList.add('controller__top_bottom_container');
        
        this._controller.appendChild(this._top_bottom_container);
        this._image_top = new Icon(this._top_bottom_container, require('../../../assets/images/top-button.png'));
        this._image_down = new Icon(this._top_bottom_container, require('../../../assets/images/down-button.png'));

        this._image_right = new Icon(this._controller, require('../../../assets/images/right-button.png'), () => {
            this._car.style.marginLeft = `${this._speedRight}px`;
            this._speedRight = this._speedRight + 50;
        });

        this._target.appendChild(this._controller);
        
    }
    // left() {
    //     let car = document.querySelector('.car');
    //     this._image_left.addEventListener('click', () => {
    //         car.style.marginRight = `${this._speed}px`;
    //         this._speed = this._speed + 50;
    //     });
        
    // }
}