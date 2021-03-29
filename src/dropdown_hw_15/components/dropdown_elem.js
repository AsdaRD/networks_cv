export class Elem {
    constructor(target = document.querySelector('body'), text) {
        this._text = text;
        this._target = target;
        this.render();
    }
    render(){
        this._listelem = document.createElement('li');
        this._listelem.classList.add('dropdown__list__elem');
        this._listelem.textContent = this._text;
        this._target.appendChild(this._listelem);
    }
}