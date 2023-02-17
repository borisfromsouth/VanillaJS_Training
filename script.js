//alert('Im working Im JavaScript Im Perfect 0_0');  // уведомление в браузере
console.log('Im working Im JavaScript ImPerfect 0_0');  // логирование

let a = 222; // для инициалазации переменной перед ней пишется  let
let b = a - 5;
console.log(b);
a = 100;  // переменные инициализированы выше
b = a - 8;
console.log(b);
console.log(b, a); 

//const c = 150;  // объявление константы 
//let d =  11;
//c = c - d;  // ошибка, константу нельзя менять

// Типы данных

//const value = "Sasha";  // строка   любой текст в кавычках
//const value2 = Sasha;  // ошибка!!!

const value3 = true;  // логические занчения
const value4 = false;

const value5 = 222;  // целое число

const value6 = 1.75;  // дробное число (через точку)


// Упорядоченные объекты
 
const monday = "Monday";
const tuesday = "Tuesday";
const wednesday = "Wednesday";
const thirsday = "Thirsday";
const friday = "Friday";

// вопрос к языку вывода текста в консоль (русский выводится с ошибкой)
console.log(monday, tuesday, wednesday, thirsday, friday);

const daysOfWeek = [monday, tuesday, wednesday, thirsday, friday]
console.log(daysOfWeek);
console.log(daysOfWeek[2]); // элемент по позиции

console.log(daysOfWeek, 1234, true); // массивы можно комбайнить со всем остальным

let info = {  // пример объекта
    name: "Alexander",  // хранение значений в форматет имя : значение 
    age: 23,
    city: "Minsk",
    sex: true,
    favGames: ["Frost Punk","Floatsam","The Witcher 3"],
    faxFood: [
        {
            name: "Burger",
            fat: true
        },
        {
            name: "Banana",
            fat: false
        }
    ]
};

console.log(info.age);  // обращенире к полям объекта 
console.log(info.name);  
console.log(info);  

info.name = "Alex";  // перезапись поля объекта
console.log(info.name);  

console.log(console);  

// функции
function sayHello(param){  //
    console.log("Hello " + param);  
    console.log(`Hello ${param}`);  
    return "Hello " + param;
}

sayHello(info.name);

const temp = sayHello("Anton");
console.log(temp);  

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    devide: function(a, b){
        return a / b;
    },
    pow: function(a){
        return a * a;
    },
};
console.log(calculator.plus(5, 10));
console.log(calculator.minus(5, 10));
console.log(calculator.multiply(5, 10));
console.log(calculator.devide(5, 10));
console.log(calculator.pow(5, 10));

////////////////////////////////////////////////////////////////////////////////////

// DOM - (document object model) js при загрузки страницы забирает все теги
// и преобразует их в объекты внутри js так, что мы можем получить к
// ним доступ и работать

console.log(document);  // для работы с html используется document

const title = document.getElementById('title');
console.log(title);

title.innerHTML = "Hello from JS!";  // изменеие текста тега
//title.style.color = 'red';
console.log(title);

const title2 = document.getElementsByTagName('h1'); // можем получить сразу несколько элементов по одинаковому типу
console.log(title2);

const title3 = document.getElementsByClassName('h1'); // получить элемент по названию класса 
console.log(title3);

const title4 = document.querySelector('#title'); // получаем первый попавшейся элемент с названием тега
//title4.style.color = 'green';
console.log(title4);


////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('resize', resizeHandler);  // добавляем событие, первым идет действие которое должно произойти, вторым - ответное действие
function resizeHandler(){
    console.log("Window size changed");
}

window.addEventListener('resize', resizeHandler2);  // добавляем событие, первым идет действие которое должно произойти, вторым - ответное действие
function resizeHandler2(event){  // можем закинуть само событие 
    console.log(event);
    console.log("Window size changed");
}


/*function clickHandler(){  // обработка клика
    title.style.color = 'red';
    console.log("Clicked");
}

title.addEventListener('click', clickHandler); // при клике по заголовку выполняется функция clickHandler
*/

//////////////////////////////////////////////////////////////////////////////////
// условный оператор

/*function clickHandler(){  // обработка клика
    if(title.style.color == 'red'){
        title.style.color = 'white'
    }else{
        title.style.color = 'red'
    }
}*/

//title.addEventListener('click', clickHandler); // при клике по заголовку выполняется функция clickHandler

/*const age = prompt("Write your age");
console.log(age);

if(age >= 18 && age <= 21){
    console.log("You have permission to buy cigarets");
} else if(age > 21){
    console.log("Let`s smoke");
} 
else{
console.log("You have no permission to buy cigarets");
}*/

// функция вызывается как и метод 
/*function init(){
    title.style.color = 'white'
}

init();*/ // вызов

/*function enter(){
    title.style.color = 'red'
}

function leave(){
    title.style.color = 'white'
}*/

//title.addEventListener('mouseenter', enter);
//title.addEventListener('mouseleave', leave);

/*function offlineHandler(){
    console.log("No Ethernet connection. Bye-bye!");
}
function onlineHandler(){
    console.log("Ethernet connection working good!");
}

window.addEventListener("offline", offlineHandler);  // проверка на прослушивание онлайна
window.addEventListener("online", onlineHandler);*/


function clickHandler(){
    const currentClass = title.className;
    console.log(currentClass);
    if(currentClass != 'clicked'){
        title.className = 'clicked';
        console.log("Set clicked");
    }else{
        title.className = "";
        console.log("Remove clicked");
    }
}

function init(){
    title.addEventListener('click', clickHandler);
}

init();