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