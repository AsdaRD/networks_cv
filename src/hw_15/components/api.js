import { Comments_list } from './comments';
export class API {
    constructor(target = document.querySelector('ul')) {
        this.target = target;
        this._tasks = [];
        this.fetchData();
    }
    renderList() {
        for(const task of this._tasks) {// MODEL
            // console.log(task);
            this._api = new Comments_list(this._target, task.author, task.text, task.date);
            console.log(this._api);
        }
    }
    fetchData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asda-osi.github.io/webpackcfg/build/STRINGLIFYHW');
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
}