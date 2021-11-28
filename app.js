// LIST OF SERVICES AND DETAILS
const ARR_OF_SERVICES = [
    {
        name: "NBA Score API",
        price: "19.99",
        rating: 5,
        desc: "An API service that provides you the most up-to-date NBA stats on teams, players, and games.",
        sale: false,
        id: 1,
    },
    {
        name: "Dictionary API",
        price: "24.99",
        rating: 4.5,
        desc: "This API provides Webster's large collection of English vocabulary words.",
        sale: true,
        id: 2,
    },
    {
        name: "Famous Recipe API",
        price: "16.99",
        rating: 4,
        desc: "A recipe API that has some of the most famous and renound cooking recipes.",
        sale: false,
        id: 3,
    },
    {
        name: "Weather API",
        price: "28.99",
        rating: 5,
        desc: "Our state-of-the-art weather API that shows the most current weather data.",
        sale: false,
        id: 4,
    },
];

// DYNAMICALY LOAD PRODUCTS IN HTML
const serviceWrapper = document.querySelector('[data-service-wrapper]');

// format rating based on service rating number
const formatRating = rating => {
    switch (rating) {
        case 5:
            return `
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            `;
        case 4.5:
            return `
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
            `;
        case 4:
            return`
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            `;
        case 3.5:
            return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            `;
        case 3:
            return `
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
            `;
        case 2.5:
            return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            `;
        case 2:
            return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            `;
        case 1.5:
            return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            `;
        case 1:
            return `
            <ion-icon name="star"></ion-icon>
            `;
        case .5:
            return `
                <ion-icon name="star-half"></ion-icon>
            `;
        default:
            return `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            `;
    }
};

// dynamically load services in dom
for(let i = 0; i < ARR_OF_SERVICES.length; i++){

    let rating = ARR_OF_SERVICES[i].rating;
    let rating_HTML = formatRating(rating);

    serviceWrapper.innerHTML += `
    <div class="service-card">
        <img src="https://camsteph.github.io/API-Shop/assets/imgs/service-img-0${i+1}.jpg" class="card-img" alt="">
        <div class="details-wrap">
            <span class="service-card-title">${ARR_OF_SERVICES[i].name}</span>
            <span class="service-card-price">$${ARR_OF_SERVICES[i].price} /mo</span>
            <span class="service-card-rating">${rating_HTML}</span>
            <p class="service-card-description">${ARR_OF_SERVICES[i].desc}</p>
            <div class="add-to-cart-wrap">
                <button class="add-to-cart-btn" id="${i}" data-add-to-cart>Add to Cart <ion-icon name="cart"></ion-icon></button>
                <select name="months" id="months-${i}" data-months-value>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    </div>
    `;
}

// HANDLE IMAGE SLIDER ON HOME PAGE
const bannerWrapper = document.querySelector('[data-banner-wrapper]');
const nextBtn = document.querySelector('[data-next-btn]');
const prevBtn = document.querySelector('[data-prev-btn]');
let next_image = 2;
let btn_clicked = false;

const handleSlider = () => {
    if(!btn_clicked){
        if(next_image < 5){
            bannerWrapper.style.transition = 'all .5s ease';
            bannerWrapper.style.background = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`;
            bannerWrapper.style.backgroundPosition = 'center';
            bannerWrapper.style.backgroundSize = 'cover';
            bannerWrapper.style.backgroundRepeat = 'no-repeat';
            next_image++;
        }
        else{
            next_image = 1;
        }
    }else{
        btn_clicked = !btn_clicked;
        return;
    }
};


// NEXT BTN SLIDER CLICK
const handleNext = () => {
    btn_clicked = true;
    if(next_image < 4){
        next_image++;
    }else{
        next_image = 1;
    }
    bannerWrapper.style.transition = 'all .5s ease';
    bannerWrapper.style.background = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/imgs/banner-img-0${next_image}.jpg')`;
    bannerWrapper.style.backgroundPosition = 'center';
    bannerWrapper.style.backgroundSize = 'cover';
    bannerWrapper.style.backgroundRepeat = 'no-repeat';
}

// PREV BTN SLIDER CLICK
const handlePrev = () => {
    btn_clicked = true;
    if(next_image > 0){
        next_image--;
    }else{
        next_image = 4;
    }
    bannerWrapper.style.transition = 'all .5s ease';
    bannerWrapper.style.background = `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/assets/imgs/banner-img-0${next_image}.jpg')`;
    bannerWrapper.style.backgroundPosition = 'center';
    bannerWrapper.style.backgroundSize = 'cover';
    bannerWrapper.style.backgroundRepeat = 'no-repeat';
}

setInterval(() => {
    handleSlider();
}, 4000);

nextBtn.addEventListener('click', () => {
    clearInterval();
    handleNext();
});

prevBtn.addEventListener('click', () => {
    clearInterval();
    handlePrev();
});


// HANDLE MENU LAYER FUNCTIONALITY
const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
const closeMenuBtn = document.querySelector('[data-close-menu-btn]');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
});

closeMenuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-335px)';
});

// MANAGE CART FUNCTIONALITY

class APIShopCart{
    constructor(navCartQty){
        this.totalCartQty = localStorage.getItem('totalCartQty') ? parseInt(localStorage.getItem('totalCartQty')) : 0;
        this.navCartQty = navCartQty;
        this.pseudo_CartTotal = '9+';
        this.selectedProducts = localStorage.getItem('selectedProducts') ? this.getSelectedProductsFromStorage() : new Map();
        this.productNamesList = [];
    }

    incrementTotalCartQty(months){
        let storage_qty = localStorage.getItem('totalCartQty');
        storage_qty = storage_qty ? storage_qty : '0';
        storage_qty = parseInt(storage_qty);
        if(this.totalCartQty < 9){
            if(this.totalCartQty + months < 9){
                
                this.totalCartQty += months;
                localStorage.setItem('totalCartQty', this.totalCartQty);
                this.updateTotalCartDisplay();
            }else{

                this.navCartQty.innerText = this.pseudo_CartTotal;
                this.totalCartQty += months;
                localStorage.setItem('totalCartQty', this.totalCartQty);
            }
        }else{

            this.navCartQty.innerText = this.pseudo_CartTotal;
            this.totalCartQty += months;
            localStorage.setItem('totalCartQty', this.totalCartQty);
        }
        console.log(this.totalCartQty);
        console.log(localStorage.getItem('totalCartQty'));
    }

    updateTotalCartDisplay(){
        this.navCartQty.innerText = this.getTotalCartQty();
    }

    getTotalCartQty(){
        return this.totalCartQty;
    }

    addToSelectedProducts(id, qty){
        id = parseInt(id);
        let obj;
        if(ARR_OF_SERVICES[id]){
            
            let curr_product_qty = this.selectedProducts.get(`product${id}`);
            if(curr_product_qty){

                this.selectedProducts.set(`product${id}`, {...ARR_OF_SERVICES[id], quantity: qty + parseInt(curr_product_qty.quantity)});
                obj = Object.fromEntries(this.selectedProducts);
                localStorage.setItem('selectedProducts', JSON.stringify(obj));

                console.log(this.selectedProducts);
                // console.log(curr_product_qty.quantity);
                
            }else{

                this.selectedProducts.set(`product${id}`, {...ARR_OF_SERVICES[id], quantity: qty});
                obj = Object.fromEntries(this.selectedProducts);
                localStorage.setItem('selectedProducts', JSON.stringify(obj));
                // localStorage.setItem('selectedProducts2', JSON.stringify(obj));

                console.log(this.selectedProducts);
            }
        }else{
            console.error('This product does not exist.');
        }
    }

    getSelectedProductsFromStorage(){
        if(localStorage.getItem('selectedProducts')){
            let products = JSON.parse(localStorage.getItem('selectedProducts'));
            let map = new Map(Object.entries(products));
            return map;
        }
    }
}

const addToCartBtn = document.querySelectorAll('[data-add-to-cart]');
const navCartQty = document.querySelector('[data-nav-cart-qty]');
let monthsValue = document.querySelectorAll('[data-months-value]');

// initialize cart to 0
let apiShopCart = new APIShopCart(navCartQty);
let curr_cart_qty = localStorage.getItem('totalCartQty');
if(!curr_cart_qty){
    localStorage.setItem('totalCartQty', apiShopCart.totalCartQty);
    navCartQty.innerText = apiShopCart.getTotalCartQty();
}else{
    console.log('Storage is already set. Qty is: ' + curr_cart_qty);
    if(curr_cart_qty < 9){
        navCartQty.innerText = curr_cart_qty;
        
    }else{
        navCartQty.innerText = '9+';

    }
}

if(localStorage.getItem('selectedProducts')){
    let products = JSON.parse(localStorage.getItem('selectedProducts'));
    let map = new Map(Object.entries(products));
    console.log(map);
}


// add click event listeners to add to cart btn's
addToCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        // loop through array of select elements with month values
        for(let i = 0; i < monthsValue.length; i++){

            // if btn id matches select element id
            if(('months-' + btn.id) == monthsValue[i].id){

                let val = monthsValue[i].value;

                if(val && val != 0 || val != '0'){

                    // update total cart qty
                    apiShopCart.incrementTotalCartQty(parseInt(monthsValue[i].value));
                    apiShopCart.addToSelectedProducts(btn.id, parseInt(monthsValue[i].value));
                    monthsValue[i].value = 0;
                }
            }
        }
    });
});
