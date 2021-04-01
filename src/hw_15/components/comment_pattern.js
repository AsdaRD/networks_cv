// import './comment_pattern.scss'
import { Comments_list } from './comments';

export class Comment {
    constructor(target = document.querySelector('body')) {
    this._target = target;
    this._tasks = [];
    this.render();
    this.fetchData();

    }
    renderList() {
        for(const task of this._tasks) {// MODEL
            // console.log(task);
            this._api = new Comments_list(this._list, task.author, task.text, task.date);
            console.log(this._api);
        }
    }
    fetchData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asda-osi.github.io/json/stringlifyhw.html');
        xhr.send();

        const stateChangeHandler = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('smth is wrong');
                    return;
                }
                this._tasks = JSON.parse(xhr.response);
                this.renderList();
            }
        }
        xhr.addEventListener('readystatechange', stateChangeHandler);

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
        this._target.appendChild(this._root);

        
        this._form.addEventListener('submit', (eventObject) => {
            eventObject.preventDefault();
            if(this._author.value !== '' && this._comment_area.value !== '') {
                this._comments_list = new Comments_list(this._list, this._author.value, this._comment_area.value);
                this._author.value = '';
                this._comment_area.value = '';
            }
        })
    }
};