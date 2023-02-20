const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greetings = document.querySelector('.js-greetings');

function init(){
    saveUserName();
    loadUserName();
}

function loadUserName(){
    const currentName = localStorage.getItem('currentUserName'); // достает значение по ключю
    if(currentName != null){
        showGreetings(currentName);
    }else{
        greetings.innerText = "Welcome!";
    }
}

function saveUserName(){
    localStorage.setItem('currentUserName', "Alex"); // сохранение данных в формате ключ - значение в браузере
}

function showGreetings(text){
    greetings.innerText = "Hello, " + text;
    greetings.classList.add('showing'); // назначение нового класса, значит и новый css
    form.classList.remove('showing');
}

init();