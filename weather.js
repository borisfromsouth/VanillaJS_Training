const weatherContainer = document.querySelector('.js-weather');
const API_KEY = "9747238a52584d74ac2b4f227a2af2b5";

function init(){
    setInterval(getCords, 2000);
}

function getCords(){
    const coords = localStorage.getItem('coords');
    if(coords != null){
        const loadedCoords = JSON.parse(coords);
        getWeather(loadedCoords.latitude, loadedCoords.longitude);
    }else{
        askForCords();
    }
}

function askForCords(){
    // функция котороая определяет геопозицию, ответ отбрабатывается одним из 2х обработчиков
    navigator.geolocation.getCurrentPosition(locationSuccessHandler, locationFailHandler);
}

function locationSuccessHandler(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const positionObject = {
        latitude,
        longitude
    };
    saveCoords(positionObject);
    getWeather(latitude, longitude);
}

function locationFailHandler(position){
    console.log("Position not found");
}

function saveCoords(positionObject){
    localStorage.setItem('coords', JSON.stringify(positionObject));
}

function getWeather(latitude, longitude){ // отправляем запрос на API
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(function(response){ // после получения ответа переводим его в json
        return response.json(); // возращаем json и выполняем дальнейших действий
    })
    .then(function(json){
        const temperature = json.main.temp; // находим данные в ответе
        const place = json.name;

        weatherContainer.innerText = `${temperature} @ ${place}`
    });
}

init();