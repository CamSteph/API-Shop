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

const calculateTotalAPIPrice = (price, qty) => {
    let total = price * qty;
    total = parseFloat(total.toFixed(2));
    totalAmount += total;
    return total;
};

const displayProducts = (arr_of_products) => {

    cartDetailsWrapper.innerHTML = '';

    for(let i = 0; i < arr_of_products.length; i++){
        
        let btn_id = arr_of_products[i][1].id - 1;
        let name = arr_of_products[i][1].name;
        let price = arr_of_products[i][1].price;
        let qty = arr_of_products[i][1].quantity;
        let img_id = arr_of_products[i][1].id;

        cartDetailsWrapper.innerHTML += `
            <div class="detail-card">
                <header class="detail-card-header">
                    <img src="https://camsteph.github.io/API-Shop/assets/imgs/service-img-0${img_id}.jpg" alt="">
                    <div class="detail-value-wrap">
                        <span class="card-name">${name}</span>
                        <button class="remove-service-btn" id="${btn_id}" onclick="removeProductFromSelectedProducts(${btn_id})" data-remove-service-btn><ion-icon name="trash"></ion-icon></button>
                    </div>
                </header>
                <div class="detail-card-body">
                    <div class="card-body-row">
                        <span class="card-body-title">Months:</span>
                        <span class="card-body-value">x ${qty}</span>
                    </div>
                    <div class="card-body-row">
                        <span class="card-body-title">Price:</span>
                        <span class="card-body-value">$${price}</span>
                    </div>
                </div>
                <footer class="detail-card-footer">
                    <span class="total-card-price-name">Total API Price:</span>
                    <span class="total-card-price-value">$${calculateTotalAPIPrice(price, qty)}</span>
                </footer>
            </div>
        `;
    }
};

const totalAmountValue = document.querySelector('[data-total-amount-value]');
let arr_of_products;

if(localStorage.getItem('selectedProducts')){
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));

    arr_of_products = Object.entries(selectedProducts);

    if(arr_of_products){
        displayProducts(arr_of_products);
        totalAmountValue.innerText = 'Total: $' + totalAmount.toFixed(2);
    }
}

let firstClick = true;

const updateTotalCartQtyStorage = (id) => {
    let curr_qty = localStorage.getItem('totalCartQty');
    console.log(curr_qty);
    for(let i = 0; i < arr_of_products.length; i++){
        if(arr_of_products[i][0] == 'product' + id.toString()){
            curr_qty = parseInt(curr_qty);
            let product_qty = parseInt(arr_of_products[i][1].quantity);
            let new_qty = curr_qty - product_qty;
            console.log(new_qty);
            if(new_qty < 0) new_qty = 0;
            localStorage.setItem('totalCartQty', new_qty);
            if(new_qty < 9){
                navCartQty.innerText = localStorage.getItem('totalCartQty');
            }else if(new_qty < 0){
                navCartQty.innerText = '0';

            }else{
                navCartQty.innerText = '9+';
            }
        }
    }
};

const updateSelectedProductsStorage = (id) => {
    let curr_selected_products = JSON.parse(localStorage.getItem('selectedProducts'));
    let arr = Object.entries(curr_selected_products);
    let temp_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] !== 'product' + id.toString()){
            temp_arr.push(arr[i]);
        }
    }
    let map = new Map(arr_of_products);
    console.log(map);
    // localStorage.setItem('selectedProducts', JSON.stringify(map));
    // console.log(JSON.parse(localStorage.getItem('selectedProducts')));
}

const removeServiceBtn = document.querySelectorAll('[data-remove-service-btn]');

function removeProductFromSelectedProducts(id){
    let map = new Map(arr_of_products);
    // console.log(map);
    map.delete(`product${id}`);
    // console.log(map);
    let obj = Object.fromEntries(map);
    // localStorage.setItem('selectedProducts', JSON.stringify(map));

    arr = Object.entries(obj);
    displayProducts(arr);

    let temp_arr = [];
    for(let i = 0; i < arr_of_products.length; i++){
        if(arr_of_products[i][0] !== 'product' + id.toString()){
            temp_arr.push(arr_of_products[i]);
        }
    }
    // console.log(temp_arr)
    updateTotalCartQtyStorage(id);
    updateSelectedProductsStorage(id);
    arr_of_products = temp_arr;


}

// removeServiceBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         removeProductFromSelectedProducts(btn.id);
//     });
// });
