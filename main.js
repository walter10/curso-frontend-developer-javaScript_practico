const menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menu_email.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobilepMenu);
menucarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);
function toggleDesktopMenu(){
    const isasideMenuClosed = shopingCartContainer.classList.contains('inactive');
    
    if(!isasideMenuClosed){
        shopingCartContainer.classList.add('inactive');

    }

    desktopMenu.classList.toggle('inactive');

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



function toggleMobilepMenu(){
    
    const isasideMenuClosed = shopingCartContainer.classList.contains('inactive');
    
    if(!isasideMenuClosed){
        shopingCartContainer.classList.add('inactive');

    }

    closeProductDetailAside();


    mobileMenu.classList.toggle('inactive');

}

function openProductDetailAside(){
    shopingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
    

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

    shopingCartContainer.classList.toggle('inactive');
    console.log('mostrar menu');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');      
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');

    }   
    
}


const productlist = [];

productlist.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'computadora',
    price: 550,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



function renderProducts(arr){
    for (product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
        const productImg=document.createElement('img');        
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);


        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+ product.price;
        
        const productName=document.createElement('p');
        productName.innerText=product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productlist);