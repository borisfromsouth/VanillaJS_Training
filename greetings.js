const form = document.querySelector('.js-form'); // получаем объект формы
const input = form.querySelector('input');       // получаем объект ввода
const greetings = document.querySelector('.js-greetings'); // получаем элемент h1

function init(){
    loadUserName();
}

function loadUserName(){
    const currentName = localStorage.getItem('currentUserName'); // достает значение по ключю
    if(currentName != null){
        showGreetings(currentName);
    }else{
        askUserName();
    }
}

function showGreetings(text){
    greetings.innerText = "Hello, " + text;
    form.classList.remove('showing'); // скрываем форму
    greetings.classList.add('showing'); // назначение нового класса, значит и новый css
}

function askUserName(){ 
    form.classList.add('showing'); // показываем текст-бокс
    form.addEventListener('submit', submitHandler); // добавляем обработку ввода Enter-ом
}

function submitHandler(event){ 
    event.preventDefault(); // предотвращает стандартное поведение (обноление страницы)
    const inputValue = input.value; // получить текст из текст-бокса
    showGreetings(inputValue); // показать текст
    saveUserName(inputValue); // сохранить в браузере
}

function saveUserName(name){
    localStorage.setItem('currentUserName', name);// сохранение данных в формате ключ - значение в браузере
}

init();