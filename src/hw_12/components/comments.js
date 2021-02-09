export function comments (target = document.querySelector('body')) {
    
    const root = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const comment = document.createElement('input');
    const submit = document.createElement('button');
    const ul = document.createElement('ul');
    
    form.appendChild(name);
    form.appendChild(comment);
    form.appendChild(submit);
    root.appendChild(form);
    root.appendChild(ul);
    target.appendChild(root);
    
    name.type = 'text';
    comment.type = 'text';
    
    root.classList.add('list');
    form.classList.add('list__form');
    name.classList.add('list__name');
    comment.classList.add('list__comment');
    submit.classList.add('list__submit');
    

    
}
