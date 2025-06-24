// Калькулятор доставки
document.getElementById('calculate-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const method = document.getElementById('method').value;

    let cost = 0;
    let days = '1-2';
    let methodName = '';

    // Розрахунок вартості в залежності від міста та способу доставки
    if (method === 'pickup') {
        cost = 0;
        days = '1-2';
        methodName = 'Самовивіз';
    } else if (method === 'courier') {
        cost = 50;
        days = '1-3';
        methodName = 'Кур\'єрська доставка';

        if (city === 'other') {
            cost = 0;
            days = 'Недоступно';
            methodName = 'Кур\'єрська доставка (тільки по місту)';
        }
    } else if (method === 'nova_poshta') {
        cost = 70 + (weight > 1 ? Math.floor(weight - 1) * 20 : 0);
        days = '2-5';
        methodName = 'Нова Пошта';
    } else if (method === 'ukrposhta') {
        cost = 50 + (weight > 1 ? Math.floor(weight - 1) * 15 : 0);
        days = '3-6';
        methodName = 'Укрпошта';
    }

    // Вивід результату
    const resultDiv = document.getElementById('result');
    if (days === 'Недоступно') {
        resultDiv.innerHTML = `
                    <p><strong>${methodName}</strong></p>
                    <p>Доставка обраним способом недоступна для вашого міста.</p>
                    <p>Будь ласка, оберіть інший спосіб доставки.</p>
                `;
    } else {
        resultDiv.innerHTML = `
                    <p><strong>${methodName}</strong></p>
                    <p><strong>Приблизна вартість:</strong> ${cost} грн</p>
                    <p><strong>Термін доставки:</strong> ${days} днів</p>
                    <p><strong>Місто:</strong> ${document.getElementById('city').options[document.getElementById('city').selectedIndex].text}</p>
                `;
    }

    resultDiv.style.display = 'block';
});

// FAQ акордеон
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');

        const icon = question.querySelector('i');
        if (item.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Імітація завантаження мапи (у реальному коді тут буде API Google Maps або іншого сервісу)
setTimeout(() => {
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-map-marked-alt" style="font-size: 3rem; color: #4a6fa5; margin-bottom: 1rem;"></i>
                    <h3 style="margin-bottom: 1rem;">Інтерактивна мапа зони доставки</h3>
                    <p>Тут відображатиметься мапа з позначками наших магазинів та зоною кур'єрської доставки</p>
                    <button style="margin-top: 1rem; background: var(--accent);">Перевірити доступність доставки</button>
                </div>
            `;
}, 1000);