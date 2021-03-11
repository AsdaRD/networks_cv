import './car.scss';

export class Car{
    constructor (target = document.querySelector('body'), speed) {
        this._target = target;
        this._speed = speed;
        this.render();
    }
    render() {
        this._image = document.createElement('img');
        this._image.src = require('../../../assets/images/27935-3-hot-wheels-transparent-thumb.png');
        this._image.classList.add('car');
        this._target.appendChild(this._image);
    }
}