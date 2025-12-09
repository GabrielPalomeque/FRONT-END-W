/* =========================
   1. BASE DE DATOS (Simulada)
   ========================= */
const products = [
    {
        id: 1,
        title: "Nike Air Max",
        price: 120,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
    },
    {
        id: 2,
        title: "Adidas Ultraboost",
        price: 140,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
    },
    {
        id: 3,
        title: "Puma RS-X",
        price: 95,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
    },
    {
        id: 4,
        title: "Reebok Classic",
        price: 85,
        image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
    }
];

// Carrito (Intentamos leerlo del localStorage, si no hay nada, array vacío)
let cart = JSON.parse(localStorage.getItem("CART_DATA")) || [];

/* =========================
   2. ELEMENTOS DEL DOM
   ========================= */
const shopContent = document.getElementById("shop-content");
const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");
const cartContent = document.querySelector(".cart-content");
const totalPriceEl = document.querySelector(".total-price");

/* =========================
   3. EVENTOS
   ========================= */
// Cargar productos al iniciar
document.addEventListener("DOMContentLoaded", () => {
    renderShop();
    renderCart(); // Por si había algo guardado
});

// Abrir/Cerrar carrito
cartIcon.addEventListener("click", () => cartSidebar.classList.add("active"));
closeCart.addEventListener("click", () => cartSidebar.classList.remove("active"));

/* =========================
   4. FUNCIONES LÓGICAS
   ========================= */

// PINTAR PRODUCTOS EN LA TIENDA
function renderShop() {
    shopContent.innerHTML = products.map(product => `
        <div class="product-box">
            <img src="${product.image}" alt="" class="product-img">
            <h2 class="product-title">${product.title}</h2>
            <span class="price">$${product.price}</span>
            <i class='bx bx-shopping-bag add-cart' onclick="addToCart(${product.id})"></i>
        </div>
    `).join("");
}

// AGREGAR AL CARRITO
window.addToCart = (id) => {
    // Verificamos si ya existe en el carrito
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        alert("Este producto ya está en el carrito");
        return;
    }

    // Buscamos el producto en la base de datos
    const product = products.find(p => p.id === id);

    // Lo agregamos al carrito
    cart.push(product);
    
    // Guardamos y actualizamos vista
    saveToStorage();
    renderCart();
    
    // Abrimos el carrito automáticamente para dar feedback
    cartSidebar.classList.add("active");
};

// ELIMINAR DEL CARRITO
window.removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveToStorage();
    renderCart();
};

// PINTAR EL CARRITO (Sidebar)
function renderCart() {
    cartContent.innerHTML = "";
    
    cart.forEach(item => {
        const cartBox = document.createElement("div");
        cartBox.classList.add("cart-box");
        cartBox.innerHTML = `
            <img src="${item.image}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${item.title}</div>
                <div class="cart-price">$${item.price}</div>
            </div>
            <i class='bx bxs-trash-alt cart-remove' onclick="removeFromCart(${item.id})"></i>
        `;
        cartContent.appendChild(cartBox);
    });

    updateTotal();
    updateIconCount();
}

// ACTUALIZAR PRECIO TOTAL
function updateTotal() {
    // reduce suma todos los precios del array
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalPriceEl.innerText = "$" + total;
}

// ACTUALIZAR CONTADOR DEL ICONO
function updateIconCount() {
    cartIcon.setAttribute("data-quantity", cart.length);
}

// GUARDAR EN LOCALSTORAGE
function saveToStorage() {
    localStorage.setItem("CART_DATA", JSON.stringify(cart));
}

// BOTÓN COMPRAR (Limpiar todo)
document.querySelector(".btn-buy").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }
    alert("¡Pedido realizado con éxito!");
    cart = [];
    saveToStorage();
    renderCart();
    cartSidebar.classList.remove("active");
});