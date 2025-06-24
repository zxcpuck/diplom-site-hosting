let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Обробка форми
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    if (!name || !phone) {
        alert("Будь ласка, заповніть обов'язкові поля!");
        return;
    }

    if (cart.length === 0) {
        alert("❌ Кошик порожній. Додайте товари перед оформленням.");
        return;
    }

    // Формування повідомлення для Telegram
    let message = `📦 Нове замовлення!\n\n`;
    message += `Ім’я: ${name}\n`;
    message += `Телефон: ${phone}\n`;
    message += `Адреса: ${address || "Не вказана"}\n\n`;
    message += `Товари:\n`;

    cart.forEach((item) => {
        message += `- ${item.name} × ${item.price} грн\n`;
    });

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\n💰 Загальна сума: ${totalAmount.toFixed(2)} грн`;

    sendToTelegram(message);
});

// Відображення товарів у замовленні
function displayOrderItems() {
    const orderItemsContainer = document.getElementById("orderItems");
    orderItemsContainer.innerHTML = ""; // Очищуємо попередній вміст

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = "<p>Кошик порожній</p>";
        return;
    }

    let total = 0;

    cart.forEach((item) => {
        const orderItem = document.createElement("div");
        orderItem.className = "order-item";
        orderItem.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}">
            <p>${item.name} - ${item.price} грн</p>
        `;
        orderItemsContainer.appendChild(orderItem);
        total += item.price;
    });

    document.getElementById("totalPrice").textContent = total.toFixed(2);
}

// Відправка до Telegram
function sendToTelegram(message) {
    const telegramToken = "7944810517:AAHgCFJAQPxV_gal43P4tLf4OXS6T_Oak-A"; // Ваш токен
    const chatId = "1055940599"; // Ваш чат ID

    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
        .then((response) => {
            if (response.ok) {
                console.log("✅ Повідомлення надіслане через Telegram");
                return response.json();
            } else {
                throw new Error("Telegram не відповідає");
            }
        })
        .then(() => {
            alert("✅ Ваше замовлення успішно надіслане менеджеру!");
            localStorage.removeItem("cart");
            window.location.href = "index.html"; // Повертає на головну сторінку
        })
        .catch((err) => {
            console.error("⚠️ Помилка відправлення:", err);
            alert("⚠️ Не вдалося відправити замовлення. Спробуйте ще раз.");
        });
}

window.addEventListener("DOMContentLoaded", () => {
    displayOrderItems();
});
