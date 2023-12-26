const menu = document.querySelector('#menu');
const background = document.querySelector('.background');
const sidenav = document.querySelector('#sidenav');
const closeelem = document.querySelector('#close');


closeelem.addEventListener('click', function(){
    background.style.transform = 'translateX(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-14%';
})

menu.addEventListener('click', function(){
    background.style.transform = 'translateX(100px) scale(0.6) rotateY(-6deg)';
    background.style.filter = 'blur(1px)';
    sidenav.style.left = '3%';
})