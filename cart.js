const menuBtn=document.querySelector("[data-menu-btn]"),menu=document.querySelector("[data-menu]"),closeMenuBtn=document.querySelector("[data-close-menu-btn]");menuBtn.addEventListener("click",()=>{menu.style.transform="translateX(0)",menu.style.boxShadow="0 10px 36px -12px rgb(58, 68, 82)"}),closeMenuBtn.addEventListener("click",()=>{menu.style.transform="translateX(-335px)",menu.style.boxShadow="none"});const navCartQty=document.querySelector("[data-nav-cart-qty]"),cartDetailsWrapper=document.querySelector("[data-cart-details-wrapper]");let totalAmount=0,curr_cart_qty=localStorage.getItem("totalCartQty");navCartQty.innerText=curr_cart_qty?curr_cart_qty<9?curr_cart_qty:"9+":"0";const calculateTotalAPIPrice=(t,e)=>{let a=t*e;return a=parseFloat(a.toFixed(2)),totalAmount+=a,a},displayProducts=t=>{cartDetailsWrapper.innerHTML="";for(let e=0;e<t.length;e++){let a=t[e][1].id-1,r=t[e][1].name,o=t[e][1].price,l=t[e][1].quantity,n=t[e][1].id;cartDetailsWrapper.innerHTML+=`\n            <div class="detail-card">\n                <header class="detail-card-header">\n                    <img src="https://camsteph.github.io/API-Shop/assets/imgs/service-img-0${n}.jpg" alt="">\n                    <div class="detail-value-wrap">\n                        <span class="card-name">${r}</span>\n                        <button class="remove-service-btn" id="${a}" onclick="removeProductFromSelectedProducts(${a})" data-remove-service-btn><ion-icon name="trash"></ion-icon></button>\n                    </div>\n                </header>\n                <div class="detail-card-body">\n                    <div class="card-body-row">\n                        <span class="card-body-title">Months:</span>\n                        <span class="card-body-value">x ${l}</span>\n                    </div>\n                    <div class="card-body-row">\n                        <span class="card-body-title">Price:</span>\n                        <span class="card-body-value">$${o}</span>\n                    </div>\n                </div>\n                <footer class="detail-card-footer">\n                    <span class="total-card-price-name">Total API Price:</span>\n                    <span class="total-card-price-value">$${calculateTotalAPIPrice(o,l)}</span>\n                </footer>\n            </div>\n        `}},totalAmountValue=document.querySelector("[data-total-amount-value]");let arr_of_products;if(localStorage.getItem("selectedProducts")){let t=JSON.parse(localStorage.getItem("selectedProducts"));(arr_of_products=Object.entries(t))&&(displayProducts(arr_of_products),totalAmountValue.innerText="Total: $"+totalAmount.toFixed(2))}let firstClick=!0;const updateTotalCartQtyStorage=t=>{let e=localStorage.getItem("totalCartQty");for(let a=0;a<arr_of_products.length;a++)if(arr_of_products[a][0]=="product"+t.toString()){let t=(e=parseInt(e))-parseInt(arr_of_products[a][1].quantity);t<0&&(t=0),localStorage.setItem("totalCartQty",t),navCartQty.innerText=t<9&&t>0?localStorage.getItem("totalCartQty"):t<=0?"0":"9+"}};let updateCartTotal=(t,e)=>{let a=(t*e).toFixed(2),r=document.querySelector("[data-total-amount-value]"),o=r.innerText.split("Total: $"),l=((o=parseFloat(o[1]))-a).toFixed(2);r.innerText="Total: $"+l};const updateSelectedProductsStorage=t=>{let e=JSON.parse(localStorage.getItem("selectedProducts")),a=Object.entries(e),r=[];for(let e=0;e<a.length;e++)if(a[e][0]!=="product"+t.toString())r.push(a[e]);else{let t=parseInt(a[e][1].quantity),r=parseFloat(a[e][1].price);updateCartTotal(t,r)}let o=new Map(r);o=Object.fromEntries(o),localStorage.setItem("selectedProducts",JSON.stringify(o))},removeServiceBtn=document.querySelectorAll("[data-remove-service-btn]");function removeProductFromSelectedProducts(t){let e=new Map(arr_of_products);e.delete(`product${t}`);let a=Object.fromEntries(e);arr=Object.entries(a),displayProducts(arr);let r=[];for(let e=0;e<arr_of_products.length;e++)arr_of_products[e][0]!=="product"+t.toString()&&r.push(arr_of_products[e]);updateTotalCartQtyStorage(t),updateSelectedProductsStorage(t),arr_of_products=r}const checkoutBtn=document.querySelector("[data-checkout-btn]"),handleCheckOut=()=>{let t=totalAmountValue.innerText.split("Total: $");t=t[1],alert("Thank you for using this application. \n\nYour total is $"+t+"."),localStorage.removeItem("selectedProducts"),localStorage.removeItem("totalCartQty"),location.reload()};checkoutBtn.addEventListener("click",()=>{handleCheckOut()});
