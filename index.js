const btn = document.getElementById('btn');
const input = document.querySelector('input');
const ul = document.querySelector('ul')
const form = document.querySelector(".a")

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;

    const dlt = document.createElement('button');
    dlt.textContent = 'x';
    li.append(dlt)

    dlt.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.prepend(checkbox);

    checkbox.addEventListener('click', (e) => {
        if(checkbox.checked){
            e.target.parentElement.style.textDecoration = 'line-through'
        }else {
            e.target.parentElement.style.textDecoration = 'none'
        }
    })

    ul.append(li);
    search.value = '';
})

