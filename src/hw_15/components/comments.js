
import { DateCR } from './date';
export class Comments_list {
    constructor(target = document.querySelector('body'), header_content, comment_content, date = new DateCR().full_date){
        this._target = target;
        this._header_content = header_content;
        this._comment_content = comment_content;
        this._date = date;
        this.render();
    }
    render() {
        this._elem = document.createElement('li');
        this._elem_header = document.createElement('h2');
        this._elem_content = document.createElement('h3');
        this._elem_date = document.createElement('h3');

        this._elem.classList.add('comment__list__elem');
        this._elem_header.classList.add('comment__list__elem__header');
        this._elem_content.classList.add('comment__list__elem__content');
        this._elem_date.classList.add('comment__list__elem__date');

        this._elem_date.textContent = this._date;
        this._elem_header.textContent = this._header_content;
        this._elem_content.textContent = this._comment_content;

        this._elem.appendChild(this._elem_header);
        this._elem.appendChild(this._elem_content);
        this._elem.appendChild(this._elem_date);
        this._target.appendChild(this._elem);
    }
              
}