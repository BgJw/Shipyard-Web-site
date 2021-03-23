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



// modall function
const modal = document.querySelector('.modal'),
   modalImg = modal.querySelector('img');


document.querySelector('.gallery__img').addEventListener('click', e => {
    if( e.target.matches('img')) {

        modalImg.src = e.target.src;
        modal.classList.remove('close');
        modal.classList.add('open');
        document.documentElement.classList.add('overflow');
    }
});

modal.addEventListener('click', e => {
    if(e.target.matches('.modal') || e.target.matches('.modal_close')){
       
        modal.classList.remove('open');
        modal.classList.add('close');
        document.documentElement.classList.remove('overflow');
    }
})

