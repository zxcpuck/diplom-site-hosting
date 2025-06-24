let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Відображення товарів
function displayProducts(productsToShow = products) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    if (productsToShow.length === 0) {
        productsList.innerHTML = '<p class="no-products">Товарів не знайдено</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Ціна: ${product.price} грн</p>
            <button onclick="addToCart(${product.id})">В кошик</button>
        `;
        productsList.appendChild(productCard);
    });
}

// Додавання в кошик
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Пошук товарів
document.getElementById('searchInput').addEventListener('input', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = (category === 'all') || (product.category === category);
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
});


// Фільтрація товарів при зміні категорії
document.getElementById('categoryFilter').addEventListener('change', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = (category === 'all') || (product.category === category);
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
});


// Відкриття/закриття кошика
document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.add('active');
});

document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.remove('active');
});

// Оновлення кошика
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price} грн</p>
            <button onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('cartCount').textContent = cart.length;
    document.getElementById('totalPrice').textContent = total;
}

// Видалення окремого товару
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Очищення кошика
document.getElementById('clearCart').addEventListener('click', () => {
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
});

// Замовлення
document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Кошик порожній!");
        return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html"; // Переходить на сторінку checkout
});


function openProductDetails(productId) {
    // Зберігаємо ID товару в localStorage
    localStorage.setItem('selectedProductId', productId);
    // Переходимо на сторінку деталей товару
    window.location.href = 'product-details.html';
}

// Модифікуємо функцію displayProducts
function displayProducts(productsToShow) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    if (productsToShow.length === 0) {
        productsList.innerHTML = `
            <div class="no-products-message">
                <p>😔 На жаль, за вашим запитом нічого не знайдено.</p>
                <p>Спробуйте змінити категорію або пошукове слово.</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="product-image"> 
            <h3>${product.name}</h3>
            <p>Ціна: ${product.price} грн</p>
            <button onclick="openProductDetails(${product.id})">Детальніше</button>
            <button onclick="addToCart(${product.id})">В кошик</button>
        `;
        productsList.appendChild(productCard);
    });
}


// Ініціалізація при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products); // показати всі товари
    updateCart();
});

