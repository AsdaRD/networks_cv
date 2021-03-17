import './car.scss';

export class Car{
    constructor (target = document.querySelector('body')) {
        this._target = target;
        this.render();
    }
    render() {
        this._container = document.createElement('div');
        this._container.classList.add('car__container')
        this._image = document.createElement('img');
        this._image.src = require('../../../assets/images/27935-3-hot-wheels-transparent-thumb.png');
        this._image.classList.add('car');
        this._target.appendChild(this._container);
        this._container.appendChild(this._image);
    }
}