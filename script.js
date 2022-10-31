  
    var btnMenu = document.querySelector('.btn-menu');
    var menu = document.querySelector('.menu');
    btnMenu.addEventListener('click',function(){
    menu.classList.toggle('menu-show');
    btnMenu.classList.toggle('x');
    
        
    });