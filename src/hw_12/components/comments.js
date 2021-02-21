import { createElement } from "react";

export function comments (target = document.querySelector('body')) {
    
    const root = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const comment_area = document.createElement('textarea');
    const submit = document.createElement('button');
    const ul = document.createElement('ul');
    
    form.appendChild(name);
    form.appendChild(comment_area);
    form.appendChild(submit);
    root.appendChild(form);
    root.appendChild(ul);
    target.appendChild(root);
    
    name.type = 'text';
    name.placeholder = 'Name...';
    comment_area.placeholder = 'Lorem...';
    const bold = document.createElement('b');
    submit.appendChild(bold);
    bold.textContent = 'Add comment';
    
    root.classList.add('list');
    form.classList.add('list__form');
    name.classList.add('list__name');
    comment_area.classList.add('list__comment');
    submit.classList.add('list__submit');
    ul.classList.add('list__ul');
    
    form.addEventListener('submit', (eventObject) => {
        eventObject.preventDefault();
        renderListItem();
    })
    
    function renderListItem() {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.classList.add('list__elem');

        const header = document.createElement('h2');
        li.appendChild(header);
        header.classList.add('list__header')
        header.textContent = name.value;

        const comment = document.createElement('h3');
        li.appendChild(comment);
        comment.classList.add('list__submitcomment')
        comment.textContent = comment_area.value;
        
        name.value = '';
        comment_area.value = '';
        const comment_date = document.createElement('h3');
        comment_date.classList.add('list__date')
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        comment_date.textContent = `${day}.${month}.${year} in ${hours}:${minutes}`;
        li.appendChild(comment_date);    
    }
}
