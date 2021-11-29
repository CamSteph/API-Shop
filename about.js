// HANDLE MENU LAYER FUNCTIONALITY
const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
const closeMenuBtn = document.querySelector('[data-close-menu-btn]');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
    menu.style.boxShadow = '0 10px 36px -12px rgb(58, 68, 82)';
});

closeMenuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-335px)';
    menu.style.boxShadow = 'none';
});

// CHECK IF QTY IS ALREADY SET
const navCartQty = document.querySelector('[data-nav-cart-qty]');
const cartDetailsWrapper = document.querySelector('[data-cart-details-wrapper]');
let totalAmount = 0;

let curr_cart_qty = localStorage.getItem('totalCartQty');
if(curr_cart_qty){
    if(curr_cart_qty < 9){
        navCartQty.innerText = curr_cart_qty;
    }else{
        navCartQty.innerText = '9+';
    }
}else{
    navCartQty.innerText = '0';
}