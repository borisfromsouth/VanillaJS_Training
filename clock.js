const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1'); // ищем дочерний элемент в элементе класса js-clock

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function init(){
    setInterval(getCurrentTime, 1000);
}

init();