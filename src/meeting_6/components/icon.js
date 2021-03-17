import './icon.scss'

export class Icon {
    constructor (target = document.querySelector('body'), src = require('../../../assets/images/left-button.png'), onClick) {
        this.target = target;
        this.src = src;
        this.onClick = onClick
        this.render();
    }
    render() {
        this.icon = document.createElement('img');
        this.icon.src = this.src;
        this.icon.classList.add('icon');
        this.target.appendChild(this.icon);
        this.icon.addEventListener('click', (e) => {
            this.onClick(e);
        });
    }
}