import './list.scss';
export class List {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._tasks = [];// COLLECTION
        this.render();
        this.fetchData();
    }

    onSubmit(e) {
        e.preventDefault();
        const value = this._input.value;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'localhost:8080/xhr-basic.html');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({title: value}));

        const stateChangeHandler = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    console.error('smth is wrong');
                    return;
                }
                const newItem = this.renderOne(JSON.parse(xhr.response));
                this._ul.appendChild(newItem);
                this._input.value = '';
            }
        }
        xhr.addEventListener('readystatechange', stateChangeHandler);
    }

    render() {
        this._form = document.createElement('form');
        this._input = document.createElement('input');
        this._input.type = 'text';
        this._form.appendChild(this._input);

        this._form.addEventListener('submit', (e) => this.onSubmit(e));

        this._ul = document.createElement('ul');
        this._ul.classList.add('todos');
        this._target.appendChild(this._form);
        this._target.appendChild(this._ul);
    }

    renderList() {
        for(const task of this._tasks) {// MODEL
            console.log(task);
            const li = this.renderOne(task);
            this._ul.appendChild(li);
        }
    }

    renderOne(task) {
        const li = document.createElement('li');
        li.textContent = task.title;
        li.id = task.id;
        if (task.completed) {
            li.classList.add('task__completed');
        }
        return li;
    }

    fetchData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://asda-osi.github.io/json/stringlify.html');
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