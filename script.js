alert('Im working Im JavaScript Im Perfect 0_0');  // уведомление в браузере
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

let info = {
    name: "Alexander",
    age: 23,
    city: "Minsk",
    sex: true
};