const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoViewList = document.querySelector('.js-toDoList');

let toDoArray = [];

function init(){
    if (localStorage.length == 0) {
        localStorage.clear();
    }
    toDoForm.addEventListener('submit', toDoSubmitHandler);
    getStorageList();
}

function getStorageList(){
    const loadedToDoList = localStorage.getItem('toDoList');
    if(loadedToDoList != null){
        const parsedToDoArray = JSON.parse(loadedToDoList); // парсим массив
        parsedToDoArray.forEach(function (element) { // element - элемент массива
            addToDoListElement(element.name);
        });
    }
}

function addToDoListElement(text){ // добавляем задачу в списко
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDoArray.length + 1;

    delButton.innerHTML = 'Del'; // текст на кнопке
    delButton.addEventListener('click', deleteTaskHandler);
    span.innerText = text; // текст самой задачи

    li.appendChild(delButton); // добавляем элементы
    li.appendChild(span);
    li.id = newId;
    toDoViewList.appendChild(li);

    const toDoObject = { // создаем новый объект задачи  
        name: text,
        id: newId
    };
    toDoArray.push(toDoObject); // забрасываем в массив

    saveToDoList();
}

function toDoSubmitHandler(event){ 
    event.preventDefault();
    const inputList = toDoInput.value; // получаем занчение из текст-бокса
    addToDoListElement(inputList); // добавляем заадчу
    toDoInput.value = "";
}

function saveToDoList(){
    localStorage.setItem('toDoList', JSON.stringify(toDoArray)); // преобразование а строку так как в браузере данные хранятся в виде строк
}

function deleteTaskHandler(event){
    const btn = event.target; // получаем кнопку
    const li = btn.parentNode; // получаем элемент которому принадлежит кнопка
    toDoViewList.removeChild(li); // удаляем из списка элемент задачи
    const cleanToDoList = toDoArray.filter(function(toDo){ // получаем новый массив со значениями, которые выполнили функцию
        return toDo.id != parseInt(li.id); 
    }); 
    toDoArray = cleanToDoList;
    saveToDoList();
}

init();