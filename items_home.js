fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);

    const swiper_wrapper = document.getElementById("swiper_items");

    const swiper_electronics = document.getElementById("swiper_electronics");

    const swiper_Appliances = document.getElementById("swiper_Appliances");

    const swiper_Mobiles = document.getElementById("swiper_Mobiles");

    data.forEach((product) => {
      if (product.old_price) {
        const percent_discount = Math.floor(
          ((product.old_price - product.price) / product.old_price) * 100,
        );
        swiper_wrapper.innerHTML += `
   
        <div class="swiper-slide product1">
      <span class="sale_present">%${percent_discount}</span>
      <div class="img_product">
      <a href="#"><img src="${product.img}" id="product1" alt=""></a>
      </div>

      <div class="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
      </div>

      <p class="product_name">
       <a id="a1" href="#">${product.name}</a>
      </p>
      <div class="price">
       <p><span>$${product.price}</span></p>
       <p class="old_price">$${product.old_price}</p></div>
      <div class="icons">
       <span class="btn_add_cart" data-id="${product.id}" onclick = "addToCart()"><i class="fa-solid fa-cart-shopping"></i> add to Cart</span>
      </div>
      <div class="icon_product"><i class="fa-regular fa-heart"></i></div>
     </div>
   
   
   `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "electronics") {
        swiper_electronics.innerHTML += `
   
        <div class="swiper-slide product1">
      <span class="sale_present">%</span>
      <div class="img_product">
      <a href="#"><img src="${product.img}" id="product1" alt=""></a>
      </div>

      <div class="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
      </div>

      <p class="product_name">
       <a id="a1" href="#">${product.name}</a>
      </p>
      <div class="price">
       <p><span>$${product.price}</span></p>
       <p class="old_price"></p></div>
      <div class="icons">
       <span class="btn_add_cart" data-id="${product.id}" onclick = "addToCart()"><i class="fa-solid fa-cart-shopping"></i> add to Cart</span>
      </div>
      <div class="icon_product"><i class="fa-regular fa-heart"></i></div>
     </div>
   
   
   `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "appliances") {
        swiper_Appliances.innerHTML += `
   
        <div class="swiper-slide product1">
      <span class="sale_present">%</span>
      <div class="img_product">
      <a href="#"><img src="${product.img}" id="product1" alt=""></a>
      </div>

      <div class="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
      </div>

      <p class="product_name">
       <a id="a1" href="#">${product.name}</a>
      </p>
      <div class="price">
       <p><span>$${product.price}</span></p>
       <p class="old_price"></p></div>
      <div class="icons">
       <span class="btn_add_cart" data-id="${product.id}" onclick = "addToCart()"><i class="fa-solid fa-cart-shopping"></i> add to Cart</span>
      </div>
      <div class="icon_product"><i class="fa-regular fa-heart"></i></div>
     </div>
   
   
   `;
      }
    });

    data.forEach((product) => {
      if (product.catetory == "mobiles") {
        swiper_Mobiles.innerHTML += `
   
        <div class="swiper-slide product1">
      <span class="sale_present">%</span>
      <div class="img_product">
      <a href="#"><img src="${product.img}" id="product1" alt=""></a>
      </div>

      <div class="stars">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
      </div>

      <p class="product_name">
       <a id="a1" href="#">${product.name}</a>
      </p>
      <div class="price">
       <p><span>$${product.price}</span></p>
       <p class="old_price"></p></div>
      <div class="icons">
       <span class="btn_add_cart" data-id="${product.id}" onclick="addToCart()"><i class="fa-solid fa-cart-shopping"></i> add to Cart</span>
      </div>
      <div class="icon_product"><i class="fa-regular fa-heart"></i></div>
     </div>
   
   
   `;
      }
    });
  });

let cartCount = 0;

/* Load Theme */

const toggleBtn = document.getElementById("theme-toggle");

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

/* Toggle theme */
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// CART COUNT (Header)
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.textContent = cart.length;
}

updateCartCount();

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartTotalFinal = document.getElementById("cart-total-final");

if (cartItems) renderLuxuryCart();

function renderLuxuryCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your luxury cart is empty.</p>";
    cartTotal.textContent = "0";
    cartTotalFinal.textContent = "0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="lux-item">
        <img src="${item.img}">
        <div class="lux-item-info">
          <h3>${item.name}</h3>
          <p>Premium Quality</p>
        </div>
        <div class="lux-item-price">$${item.price}</div>
        <button class="lux-remove" onclick="removeFromCart(${index})">✕</button>
      </div>
    `;
  });

  cartTotal.textContent = total;
  cartTotalFinal.textContent = total;
}
