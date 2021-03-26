// carousel

const carouselImg = ['bgMain1', 'bgMain2', 'bgMain3'];
let index = 0;

function carousel(){

    if(index >= carouselImg.length) index = 0;

    document.querySelector('.carousel').style.backgroundImage = `url('../assets/${carouselImg[index]}.jpg')`;

    index++;
}

setInterval(carousel, 7000);
