const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (!name || !email || !userMessage) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const message = `
📩 НОВЕ ПОВІДОМЛЕННЯ З ФОРМИ,БУДЬ-ЛАСКА ЗВ'ЯЖІТЬСЯ З КЛІЄНТОМ:
👤 Ім'я: ${name}
📧 Email: ${email}
📝 Повідомлення: ${userMessage}
    `;

    sendToTelegram(message);

    form.innerHTML = `
        <div class="success-message">
            <h2>Дякуємо за звернення!</h2>
            <p>Ми зв'яжемося з вами найближчим часом.</p>
        </div>
    `;
    form.classList.add("form-sent");
});

function sendToTelegram(message) {
    const telegramToken = "7944810517:AAHgCFJAQPxV_gal43P4tLf4OXS6T_Oak-A"; // ← не забувай не публікувати токен публічно
    const chatId = "1055940599";

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
            if (!response.ok) throw new Error("Помилка запиту");
            return response.json();
        })
        .then(() => {
            console.log("✅ Повідомлення надіслане в Telegram");
        })
        .catch((err) => {
            console.error("❌ Помилка відправлення:", err);
            alert("Не вдалося надіслати повідомлення. Спробуйте ще раз.");
        });
}

function toggleMap() {
    const map = document.getElementById("map");
    map.classList.toggle("hidden");
}
