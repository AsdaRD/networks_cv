// import './comment_pattern.scss'
import { API } from './api';
import { Comments_list } from './comments';

export class Comment {
    constructor(target = document.querySelector('body')) {
    this._target = target;
    this.render();
    }

    render() {
        this._root = document.createElement('div');
        this._form = document.createElement('form');
        this._author = document.createElement('input');
        this._comment_area = document.createElement('textarea');
        this._submit_button = document.createElement('button');
        this._bold = document.createElement('b');
        this._list = document.createElement('ul');
        
        this._author.type = 'text';
        this._author.placeholder = 'Name...';
        this._comment_area.placeholder = 'Lorem...';
        this._bold.textContent = 'Add comment';
        
        this._root.classList.add('comment');
        this._form.classList.add('comment__form');
        this._author.classList.add('comment__author');
        this._comment_area.classList.add('comment__area');
        this._submit_button.classList.add('comment__submit');
        this._list.classList.add('comment__list');
        
        this._form.appendChild(this._author);
        this._form.appendChild(this._comment_area);
        this._form.appendChild(this._submit_button);
        this._submit_button.appendChild(this._bold);
        this._root.appendChild(this._form);
        this._root.appendChild(this._list);
        this._api = new API(this._list);
        this._target.appendChild(this._root);

        // console.log(this._api);
        // this._list.appendChild(this._api);
        
        this._form.addEventListener('submit', (eventObject) => {
            eventObject.preventDefault();
            this._comments_list = new Comments_list(this._author.value, this._comment_area.value, '2019-03-20T18:28:43.765Z');
            this._list.appendChild(this._comments_list);
        })
    }
};