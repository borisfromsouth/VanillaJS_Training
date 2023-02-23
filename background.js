const body = document.querySelector('body');
//const toDoInput = toDoForm.querySelector('input');
//const toDoViewList = document.querySelector('.js-toDoList');

const imageCount = 4;

function init(){
    const randomNumber = getRandom();
    showPicture(randomNumber);
}

function getRandom(){
    const imageNumber = localStorage.getItem('imageNumber');
    let randonBackNumber = Math.floor(Math.random() * imageCount);
    if(imageNumber != null){
       while(imageNumber == randonBackNumber){
        randonBackNumber = Math.floor(Math.random() * imageCount);
       }
       localStorage.setItem('imageNumber', JSON.stringify(randonBackNumber));
        return randonBackNumber;
    }

    //const number = Math.floor(Math.random() * imageCount);
    localStorage.setItem('imageNumber', JSON.stringify(randonBackNumber));
    return randonBackNumber;
}

function showPicture(number){
    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img); // appenbd - добавляет элемент последним, prepend - самым первым
}

init();