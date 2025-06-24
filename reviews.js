const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyg_QGJs_2DeSYlsIWazYQOls1V__kq9Frl_Ksqu1DLm7Ldx44hhHcnjqxyzEiZYCF3zA/exec';

let reviews = [];

const reviewsContainer = document.getElementById('reviewsContainer');
const reviewForm = document.getElementById('reviewForm');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');

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

async function fetchReviews() {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        if (!response.ok) throw new Error('Помилка при завантаженні відгуків');
        reviews = await response.json();
        renderReviews();
    } catch (error) {
        console.error(error);
        reviewsContainer.innerHTML = '<p>Не вдалося завантажити відгуки.</p>';
    }
}

reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (!name || !comment) {
        alert('Будь ласка, заповніть обидва поля.');
        return;
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ name, comment })
        });

        if (!response.ok) throw new Error('Помилка при відправці відгуку');
        const result = await response.json();

        if (result.result === 'success') {
            reviews.push({ name, comment });
            renderReviews();
            reviewForm.reset();

            const msg = document.createElement('p');
            msg.textContent = '✅ Ваш відгук успішно надіслано!';
            msg.style.color = 'green';
            reviewForm.appendChild(msg);
            setTimeout(() => msg.remove(), 3000);

            reviewsContainer.scrollTop = reviewsContainer.scrollHeight;
        } else {
            alert('Помилка: ' + result.message);
        }
    } catch (error) {
        alert('Помилка мережі. Спробуйте пізніше.');
        console.error(error);
    }
});

window.addEventListener('DOMContentLoaded', fetchReviews);
