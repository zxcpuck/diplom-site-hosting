// URL твого Google Apps Script Web App
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQA72YdD1I7JsjCsk-AA22kAwsnOfUl3CGth6vLtqKz-KAU7Sx6JFLiJ44-RIcOGtv4A/exec';

// Масив відгуків. Беремо з localStorage або початкові
let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    { name: "Іван", comment: "Чудовий магазин, інструменти високої якості!" },
    { name: "Оксана", comment: "Швидка доставка та добрий сервіс." },
    { name: "Петро", comment: "Дуже задоволений покупкою, дякую!" }
];

// DOM елементи
const reviewsContainer = document.getElementById('reviewsContainer');
const reviewForm = document.getElementById('reviewForm');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

// Функція для відображення відгуків
function renderReviews() {
    reviewsContainer.innerHTML = '';
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>Поки що немає відгуків.</p>';
        return;
    }
    reviews.forEach(({ name, comment }) => {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
            <h4>${name}</h4>
            <p>${comment}</p>
        `;
        reviewsContainer.appendChild(div);
    });
}

// Обробник форми
reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (!name || !comment) {
        alert("Будь ласка, заповніть обидва поля.");
        return;
    }

    // Надсилаємо на Google Apps Script з mode: 'no-cors'
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',   // щоб уникнути CORS помилок
        body: JSON.stringify({ name, comment }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            // Ми не отримуємо відповіді через no-cors, тому просто припускаємо успіх
            reviews.push({ name, comment });
            localStorage.setItem('reviews', JSON.stringify(reviews));
            renderReviews();

            reviewForm.reset();

            // Повідомлення про успіх
            const msg = document.createElement('p');
            msg.textContent = "✅ Ваш відгук успішно надіслано!";
            msg.style.color = "green";
            reviewForm.appendChild(msg);
            setTimeout(() => msg.remove(), 3000);

            // Автоскрол до низу
            reviewsContainer.scrollTop = reviewsContainer.scrollHeight;
        })
        .catch(() => {
            alert("Помилка мережі. Спробуйте пізніше.");
        });
});

// Відобразити відгуки при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    renderReviews();
});
