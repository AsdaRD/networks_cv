export class List {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._tasks = [];// COLLECTION
        this.render();
        this.fetchData();
    }

    render() {
        this._ul = document.createElement('ul');
        this._ul.classList.add('todos');
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