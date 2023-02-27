const menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menu_email.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobilepMenu);
menucarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isasideMenuClosed = aside.classList.contains('inactive');
    
    if(!isasideMenuClosed){
        aside.classList.add('inactive');

    }

    desktopMenu.classList.toggle('inactive');

}


function toggleMobilepMenu(){
    const isasideMenuClosed = aside.classList.contains('inactive');
    
    if(!isasideMenuClosed){
        aside.classList.add('inactive');

    }


    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const isDestokMenuClosed = desktopMenu.classList.contains('inactive');      
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');

    }   
         
    if(!isDestokMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
    
}