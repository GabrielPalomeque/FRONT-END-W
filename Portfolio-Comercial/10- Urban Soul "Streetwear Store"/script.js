/* =======================
   1. PRODUCT DATABASE
   ======================= */
const products = [
    { id: 1, name: "Oversized Hoodie", price: 85, img: "https://images.unsplash.com/photo-1556906781-9a412961d28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Cargo Pants Black", price: 120, img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Industrial Belt", price: 45, img: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Graphic Tee", price: 55, img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Sneaker V1", price: 210, img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Bucket Hat", price: 35, img: "https://images.unsplash.com/photo-1575428652377-a2697242636b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
];

/* =======================
   2. RENDER PRODUCTS
   ======================= */
const productsContainer = document.getElementById("products-container");

function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <article class="product-card">
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}">
                <button class="add-btn" onclick="addToCart(${product.id})">ADD TO BAG - $${product.price}</button>
            </div>
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-price">$${product.price}</span>
            </div>
        </article>
    `).join('');
}
renderProducts();

/* =======================
   3. CART LOGIC
   ======================= */
let cart = JSON.parse(localStorage.getItem("URBAN_CART")) || [];

const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Abrir/Cerrar
document.getElementById("cart-btn").addEventListener("click", () => cartSidebar.classList.add("open"));
document.getElementById("close-cart").addEventListener("click", () => cartSidebar.classList.remove("open"));

// Agregar
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
    cartSidebar.classList.add("open");
};

// Eliminar (por índice para permitir duplicados o por ID único)
window.removeItem = (index) => {
    cart.splice(index, 1);
    updateCart();
};

function updateCart() {
    // Guardar
    localStorage.setItem("URBAN_CART", JSON.stringify(cart));
    
    // Contador
    cartCount.innerText = cart.length;
    
    // Renderizar Items
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-msg">Tu bolsa está vacía.</p>`;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.img}" alt="">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    <span class="remove-item" onclick="removeItem(${index})">Eliminar</span>
                </div>
            </div>
        `).join('');
    }

    // Calcular Total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotal.innerText = `$${total}.00`;
}

// Inicializar carrito al cargar
updateCart();

/* =======================
   4. COUNTDOWN TIMER
   ======================= */
const deadline = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 días desde hoy

const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const t = deadline - now;

    if(t < 0) {
        clearInterval(timerInterval);
        document.querySelector(".timer").innerHTML = "DROP LIVE NOW";
        return;
    }

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

}, 1000);