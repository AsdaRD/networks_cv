export class List {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._tasks = [];
        this.render();
        this.fetchData;
    }

    render() {
        this._ul = document.createElement('ul');
        this._ul.classList.add('todos');
        this._target.appendChild(this._ul);
    }

    renderList() {
        const lis = [];
        for(const task of this._tasks) {
            console.log(task);
        }
    }

    fetchData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asda-osi.github.io/webpackcfg/build/lesson_11.html');
        xhr.send();

        const stateChangeHandler = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('smth is wrong');
                    return;
                }
                this._tasks - JSON.parse(xhr.response);
                this.renderList();
            }
        }
        xhr.addEventListener('readystatechange', stateChangeHandler);

    }
}