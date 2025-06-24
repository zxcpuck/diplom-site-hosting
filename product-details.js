let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    window.cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Отримуємо ID товару з localStorage
    const productId = localStorage.getItem('selectedProductId');

    // Знаходимо товар в масиві products
    const product = products.find(p => p.id == productId);

    if (product) {
        // Заповнюємо інформацію про товар
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productNameBreadcrumb').textContent = product.name;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productCode').textContent = product.id;

        // Встановлюємо категорію
        const categoryNames = {
            'tools': 'Інструменти',
            'paint': 'Фарби',
            'hardware': 'Закріплення',
            'lumber': 'Дерево',
            'plumbing': 'Сантехніка',
            'electrical': 'Електрика'
        };

        document.getElementById('categoryLink').textContent = categoryNames[product.category] || 'Категорія';
        document.getElementById('categoryLink').href = `index.html?category=${product.category}`;

        // Заповнюємо опис (можна додати поле description до об'єктів товарів)
        const description = product.description || `Високоякісний ${product.name} для професійного використання.`;
        document.getElementById('productDescription').textContent = description;

        // Заповнюємо характеристики
        const featuresTable = document.getElementById('productFeatures');
        const features = {
            'Категорія': categoryNames[product.category] || 'Інше',
            'Виробник': 'БудМаг',
            'Країна виробник': 'Україна',
            'Гарантія': '12 місяців',
            // Додаткові характеристики можна додати до об'єкта товару
            ...product.features
        };

        for (const [key, value] of Object.entries(features)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key}</td>
                <td>${value}</td>
            `;
            featuresTable.appendChild(row);
        }

        // Завантажуємо зображення (можна додати поле images до об'єктів товарів)
        const defaultImages = [
            'https://via.placeholder.com/500x500?text=БудМаг+Товар',
            'https://via.placeholder.com/500x500?text=Фото+2',
            'https://via.placeholder.com/500x500?text=Фото+3'
        ];

        const productImages = product.images || defaultImages;
        const mainImage = document.getElementById('mainProductImage');
        mainImage.src = productImages[0];
        mainImage.alt = product.name;

        const thumbnailsContainer = document.querySelector('.thumbnails');
        productImages.forEach((img, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.innerHTML = `<img src="${img}" alt="${product.name} - фото ${index + 1}">`;
            thumbnail.addEventListener('click', () => {
                mainImage.src = img;
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Додаємо обробник для кнопки "Додати в кошик"
        document.getElementById('addToCartBtn').addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('productQuantity').value);
            for (let i = 0; i < quantity; i++) {
                addToCart(product.id);
            }
            alert(`${quantity} ${product.name} додано до кошика!`);
        });

        // Показуємо схожі товари
        showRelatedProducts(product.category, product.id);
    } else {
        // Якщо товар не знайдено, перенаправляємо на головну
        window.location.href = 'index.html';
    }

    // Оновлюємо лічильник кошика
    updateCartCount();

    // Обробники для кнопок кількості
    document.querySelector('.quantity-btn.minus').addEventListener('click', function() {
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });

    document.querySelector('.quantity-btn.plus').addEventListener('click', function() {
        const quantityInput = document.getElementById('productQuantity');
        quantityInput.value++;
    });
});

function showRelatedProducts(category, currentProductId) {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    const relatedProducts = products
        .filter(p => p.category === category && p.id != currentProductId)
        .slice(0, 4); // Беремо до 4 товарів

    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = '<p>Немає схожих товарів</p>';
        return;
    }

    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.images ? product.images[0] : 'https://via.placeholder.com/200x200?text=БудМаг'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} грн</p>
            <button onclick="localStorage.setItem('selectedProductId', ${product.id}); window.location.href='product-details.html'">Детальніше</button>
        `;
        relatedProductsContainer.appendChild(productCard);
    });
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}

// Функція для додавання товару в кошик (така сама як у main.js)

// Додавання в кошик
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

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