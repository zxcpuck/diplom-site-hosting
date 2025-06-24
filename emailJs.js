document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо елементи форми
    const form = document.getElementById('feedback-form');
    const emailInput = document.getElementById('user-email');
    const message = document.getElementById('feedback-message');

    // Ініціалізація EmailJS (заміни на свій user ID)
    emailjs.init("tuIM2lEX9P089d62V");

    // Обробник відправки форми
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Зупиняємо стандартну поведінку форми

        const userEmail = emailInput.value.trim();
        if (!userEmail) return; // Перевіряємо, чи заповнений email

        // Відправка email через EmailJS
        emailjs.send("service_l6g5pst", "template_5tdsu0b", {
            user_email: userEmail,
            name:"БудМаг - магазин будматеріалів зі всіх черлян",
            img:"https://main-cdn.sbermegamarket.ru/big1/hlr-system/464/731/398/171/759/600004321713b0.jpeg",
            message: "Дякуємо за підписку на наш інформаційний бюлетень БудМаг! Тепер ви першим дізнаєтесь про нові товари, акції, корисні поради та інші цікаві новини у світі будівництва. Будуйте разом з нами — швидко, якісно та вигідно! Бажаємо успіхів у ваших проектах!"
        })
            .then(() => {
                // Повідомлення про успіх
                message.textContent = "Дякуємо! Ваше повідомлення надіслано.";
                message.style.color = 'green';
                message.style.display = 'block';

                // Очищення форми
                form.reset();
            })
            .catch(() => {
                // Повідомлення про помилку
                message.textContent = "Сталася помилка. Спробуйте ще раз.";
                message.style.color = 'red';
                message.style.display = 'block';
            });
    });
});
