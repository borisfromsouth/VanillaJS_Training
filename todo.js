const todoForm = document.querySelector('.js-todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todoForm');

function init(){
    getStorageList();
    todoForm.addEventListener('submit', todoSubmitHandler);
}

function getStorageList(){
    const currentTodoList = localStorage.getItem('todoList');
    if(currentTodoList != null){
        //showTodoList(currentName);
    }
}

function addToDoListElement(text){
    //console.log(text);
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const span = document.createElement('span');

    delButton.innerHTML = 'Del';
    span.innerText = text;

    li.appendChild(delButton); // добьавляем элементы
    li.appendChild(span);
    todoList.appendChild(li);
}

/*function askUserName(){ 
    form.classList.add('showing'); // показываем текст-бокс
    form.addEventListener('submit', submitHandler); // добавляем обработку ввода Enter-ом
}*/

function todoSubmitHandler(event){ 
    event.preventDefault();
    const inputList = todoInput.value; 
    addToDoListElement(inputList); // показать список задач
    //saveTodoList(todoList);
}

function saveTodoList(list){
    localStorage.setItem('todoList', list);
}

init();