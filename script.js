// scroll
const scrollBtn = document.querySelector('.scroll__btn');

window.addEventListener('scroll', () => {

    if(document.documentElement.scrollTop > 600){
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    const interval = setInterval( () => {
        document.documentElement.scrollTop -= 20;

        if(document.documentElement.scrollTop <= 0) { 
            clearInterval(interval); 
        }
    }, 5);
});


// navbar collapse 

document.querySelector('.navbar__btn__close').addEventListener('click', ()=>{
    document.querySelector('.navbar__wrap').classList.toggle('show');
    document.querySelector('.navbar').classList.toggle('animation');

});