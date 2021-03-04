import './button.scss'

export class Button {
    constructor(target = document.querySelector('body'), title = '') {
        this._target = target;
        this._title = title;
        this.render();
    }

    render() {
        this._button = document.createElement('button');
        this._button.classList.add('btn');
        this._button.innerHTML = `<span>${this._title}</span>`;

        this._target.appendChild(this._button);
    }

}