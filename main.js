let inputText = document.querySelector('#add-book input');
let button = document.querySelector('.button');
let ul = document.querySelector('ul');
const spanDelete = `<span class="delete">حذف</span>`;
let checkBox = document.querySelector('#hide input');
const search = document.querySelector('#search-books input');
let li = document.querySelectorAll('li');

button.addEventListener('click' , function(e){
    const spanName = document.createElement('span');
    spanName.className = 'name';
    spanName.textContent = inputText.value;

    const li = document.createElement('li');
    li.appendChild(spanName);
    li.innerHTML += spanDelete;

    ul.appendChild(li);
    inputText.value = '';
    e.preventDefault();
})

ul.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();
    }
})

checkBox.addEventListener('click', function(e){
    if(checkBox.checked){
        ul.style.display = 'none';
    } else {
        ul.style.display = 'initial';
    }
})

search.addEventListener('keyup', function(e){
    
    for(let i = 0; i <= li.length; i++){
        if(li[i].textContent.indexOf(search.value) > -1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})