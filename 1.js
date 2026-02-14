let cart = document.querySelector(".cart1");

function open_close_cart() {
  cart.classList.toggle("active");
}

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const addToCartButtons = document.querySelectorAll(".btn_add_cart");

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        const selcetedProduct = data.find((product) => product.id == productId);

        addToCart(selcetedProduct);

        const allMatchingButtons = document.querySelectorAll(
          `.btn_add_cart[data-id="${productId}"]`
        );

        allMatchingButtons.forEach((btn) => {
          btn.classList.add("active");
          btn.innerHTML = `      <i class="fa-solid fa-cart-shopping"></i> Item in cart`;
        });
      });
    });
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart_items");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  var total_Price = 0;
  var total_count = 0;

  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {
    let total_Price_item = item.price * item.quantity;

    total_Price += total_Price_item;
    total_count += item.quantity;

    cartItemsContainer.innerHTML += `
        
    <div class="items_in_cart" id="cart_items">
      <div class="content1">
        <img src="/product/0.png" id="img_product_cart">
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, similique.</p>
          <span class="price_item">${product.price}</span>
          <div class="quantity_control">
            <div class="increase_quantity">+</div>
            <span id="num_item">${product.id}</span>
            <div class="decrease_quantity">-</div>
          </div>
          <span id="trash"><i class="fa-solid fa-trash-can"></i></span>
        </div>
      </div>
    </div>


        `;
  });
}
