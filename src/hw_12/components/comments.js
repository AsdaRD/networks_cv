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
        const comment = document.createElement('h3');
        ul.appendChild(comment);
        header.textContent = name.value;
        comment.textContent = comment_area.value;
        const date =  day +'.'+month+'.'+year+'in'+hours+':'+minutes;;
        const day = zero_first_format(current_datetime.getDate());
        const month = zero_first_format(current_datetime.getMonth()+1);
        const year = current_datetime.getFullYear();
        const hours = zero_first_format(current_datetime.getHours());
        const minutes = zero_first_format(current_datetime.getMinutes());
        ul.appendChild(date);
    }
}
