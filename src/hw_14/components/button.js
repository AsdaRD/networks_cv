import './button.scss';

export class Button {
    constructor(target = document.querySelector('body'), title = '', onClick){
        this._target = target;
        this._title = title;
        this._onClick = onClick;
        this.render();
    }
    render() {
        this._button = document.createElement('button');
        this._button.classList.add('btn');
        this._button.textContent = this._title;
        if(this._onClick) {
            this._button.addEventListener('click', (e) => {
                this._onClick(e);
            });
        }
        this._target.appendChild(this._button); 
    }
}
