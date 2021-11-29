const ARR_OF_SERVICES=[{name:"NBA Score API",price:"19.99",rating:5,desc:"An API service that provides you the most up-to-date NBA stats on teams, players, and games.",sale:!1,id:1},{name:"Dictionary API",price:"24.99",rating:4.5,desc:"This API provides Webster's large collection of English vocabulary words.",sale:!0,id:2},{name:"Famous Recipe API",price:"16.99",rating:4,desc:"A recipe API that has some of the most famous and renound cooking recipes.",sale:!1,id:3},{name:"Weather API",price:"28.99",rating:5,desc:"Our state-of-the-art weather API that shows the most current weather data.",sale:!1,id:4}],serviceWrapper=document.querySelector("[data-service-wrapper]"),formatRating=e=>{switch(e){case 5:return'\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n            ';case 4.5:return'\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star-half"></ion-icon>\n            ';case 4:return'\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n            ';case 3.5:return'\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star-half"></ion-icon>\n            ';case 3:return'\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n            ';case 2.5:return'\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star-half"></ion-icon>\n            ';case 2:return'\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            ';case 1.5:return'\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star-half"></ion-icon>\n            ';case 1:return'\n            <ion-icon name="star"></ion-icon>\n            ';case.5:return'\n                <ion-icon name="star-half"></ion-icon>\n            ';default:return'\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            <ion-icon name="star"></ion-icon>\n            '}};for(let e=0;e<ARR_OF_SERVICES.length;e++){let t=formatRating(ARR_OF_SERVICES[e].rating);serviceWrapper.innerHTML+=`\n    <div class="service-card">\n        <img src="https://camsteph.github.io/API-Shop/assets/imgs/service-img-0${e+1}.jpg" class="card-img" alt="">\n        <div class="details-wrap">\n            <span class="service-card-title">${ARR_OF_SERVICES[e].name}</span>\n            <span class="service-card-price">$${ARR_OF_SERVICES[e].price} /mo</span>\n            <span class="service-card-rating">${t}</span>\n            <p class="service-card-description">${ARR_OF_SERVICES[e].desc}</p>\n            <div class="add-to-cart-wrap">\n                <button class="add-to-cart-btn" id="${e}" data-add-to-cart>Add to Cart <ion-icon name="cart"></ion-icon></button>\n                <select name="months" id="months-${e}" data-months-value>\n                    <option value="0">0</option>\n                    <option value="1">1</option>\n                    <option value="2">2</option>\n                    <option value="3">3</option>\n                    <option value="4">4</option>\n                    <option value="5">5</option>\n                    <option value="6">6</option>\n                    <option value="7">7</option>\n                    <option value="8">8</option>\n                    <option value="9">9</option>\n                    <option value="10">10</option>\n                    <option value="11">11</option>\n                    <option value="12">12</option>\n                </select>\n            </div>\n        </div>\n    </div>\n    `}const bannerWrapper=document.querySelector("[data-banner-wrapper]"),nextBtn=document.querySelector("[data-next-btn]"),prevBtn=document.querySelector("[data-prev-btn]");let next_image=2,btn_clicked=!1;const handleSlider=()=>{btn_clicked?btn_clicked=!btn_clicked:next_image<5?(bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat",next_image++):next_image=1},handleNext=()=>{btn_clicked=!0,next_image<4?next_image++:next_image=1,bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat"},handlePrev=()=>{btn_clicked=!0,next_image>0?next_image--:next_image=4,bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat"};setInterval(()=>{btn_clicked?btn_clicked=!btn_clicked:next_image<5?(bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat",next_image++):next_image=1},4e3),nextBtn.addEventListener("click",()=>{clearInterval(),btn_clicked=!0,next_image<4?next_image++:next_image=1,bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat"}),prevBtn.addEventListener("click",()=>{clearInterval(),btn_clicked=!0,next_image>0?next_image--:next_image=4,bannerWrapper.style.transition="all .5s ease",bannerWrapper.style.background=`linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://camsteph.github.io/API-Shop/assets/imgs/banner-img-0${next_image}.jpg')`,bannerWrapper.style.backgroundPosition="center",bannerWrapper.style.backgroundSize="cover",bannerWrapper.style.backgroundRepeat="no-repeat"});const menuBtn=document.querySelector("[data-menu-btn]"),menu=document.querySelector("[data-menu]"),closeMenuBtn=document.querySelector("[data-close-menu-btn]");menuBtn.addEventListener("click",()=>{menu.style.transform="translateX(0)",menu.style.boxShadow="0 10px 36px -12px rgb(58, 68, 82)"}),closeMenuBtn.addEventListener("click",()=>{menu.style.transform="translateX(-335px)",menu.style.boxShadow="none"});const successMsg=document.querySelector("[data-success-msg]");class APIShopCart{constructor(e){this.totalCartQty=localStorage.getItem("totalCartQty")?parseInt(localStorage.getItem("totalCartQty")):0,this.navCartQty=e,this.pseudo_CartTotal="9+",this.selectedProducts=localStorage.getItem("selectedProducts")?this.getSelectedProductsFromStorage():new Map,this.productNamesList=[]}incrementTotalCartQty(e){let t=localStorage.getItem("totalCartQty");t=t||"0",t=parseInt(t),this.totalCartQty<9&&this.totalCartQty+e<9?(this.totalCartQty+=e,localStorage.setItem("totalCartQty",this.totalCartQty),this.updateTotalCartDisplay()):(this.navCartQty.innerText=this.pseudo_CartTotal,this.totalCartQty+=e,localStorage.setItem("totalCartQty",this.totalCartQty))}updateTotalCartDisplay(){this.navCartQty.innerText=this.getTotalCartQty()}getTotalCartQty(){return this.totalCartQty}addToSelectedProducts(e,t){let n;if(e=parseInt(e),ARR_OF_SERVICES[e]){let a=this.selectedProducts.get(`product${e}`);a?(this.selectedProducts.set(`product${e}`,{...ARR_OF_SERVICES[e],quantity:t+parseInt(a.quantity)}),n=Object.fromEntries(this.selectedProducts),localStorage.setItem("selectedProducts",JSON.stringify(n)),successMsg.style.display="block",setTimeout(()=>{successMsg.style.display="none"},2e3)):(this.selectedProducts.set(`product${e}`,{...ARR_OF_SERVICES[e],quantity:t}),n=Object.fromEntries(this.selectedProducts),localStorage.setItem("selectedProducts",JSON.stringify(n)),successMsg.style.display="block",setTimeout(()=>{successMsg.style.display="none"},2e3))}else console.error("This product does not exist.")}getSelectedProductsFromStorage(){if(localStorage.getItem("selectedProducts")){let e=JSON.parse(localStorage.getItem("selectedProducts"));return new Map(Object.entries(e))}}}const addToCartBtn=document.querySelectorAll("[data-add-to-cart]"),navCartQty=document.querySelector("[data-nav-cart-qty]");let monthsValue=document.querySelectorAll("[data-months-value]"),apiShopCart=new APIShopCart(navCartQty),curr_cart_qty=localStorage.getItem("totalCartQty");if(curr_cart_qty?navCartQty.innerText=curr_cart_qty<9?curr_cart_qty:"9+":(localStorage.setItem("totalCartQty",apiShopCart.totalCartQty),navCartQty.innerText=apiShopCart.getTotalCartQty()),localStorage.getItem("selectedProducts")){let e=JSON.parse(localStorage.getItem("selectedProducts"));new Map(Object.entries(e))}addToCartBtn.forEach(e=>{e.addEventListener("click",()=>{for(let t=0;t<monthsValue.length;t++)if("months-"+e.id==monthsValue[t].id){let n=monthsValue[t].value;(n&&0!=n||"0"!=n)&&(apiShopCart.incrementTotalCartQty(parseInt(monthsValue[t].value)),apiShopCart.addToSelectedProducts(e.id,parseInt(monthsValue[t].value)),monthsValue[t].value=0)}})});
