export function comments (target = document.querySelector('body')) {
    
    const root = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const comment = document.createElement('textarea');
    const submit = document.createElement('button');
    const ul = document.createElement('ul');
    
    form.appendChild(name);
    form.appendChild(comment);
    form.appendChild(submit);
    root.appendChild(form);
    root.appendChild(ul);
    target.appendChild(root);
    
    name.type = 'text';
    name.placeholder = 'Name...';
    comment.placeholder = 'Lorem...';
    const bold = document.createElement('b');
    submit.appendChild(bold);
    bold.textContent = 'Add comment';
    
    root.classList.add('list');
    form.classList.add('list__form');
    name.classList.add('list__name');
    comment.classList.add('list__comment');
    submit.classList.add('list__submit');
    
    form.addEventListener('submit', (eventObject) => {
        eventObject.preventDefault();
        renderListItem();
    })
    
    function renderListItem() {
        const li = document.createElement('li');
        ul.appendChild(li);
    }
}
