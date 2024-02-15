document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total');
    let cart = [];

    // Lista de productos (se simula una lista estática)
    const products = [
        { id: 1, name: 'Camiseta deportiva', price: 20, image: 'shirt.jpg' },
        { id: 2, name: 'Pantalones cortos', price: 25, image: 'shorts.jpg' },
        { id: 3, name: 'Zapatillas deportivas', price: 50, image: 'shoes.jpg' }
    ];

    // Función para renderizar los productos en el DOM
    function renderProducts() {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Agregar al carrito</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    // Función para renderizar los elementos del carrito en el DOM
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(cartItem);
        });

        // Calcular el total y mostrarlo
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        totalContainer.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Función para agregar un producto al carrito
    window.addToCart = function(productId) {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            cart.push(productToAdd);
            renderCart();
        }
    };

    // Inicializar la página
    renderProducts();
});