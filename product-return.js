// Drag and Drop для завантаження файлів
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

fileUpload.addEventListener('click', () => fileInput.click());

fileUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '#e74c3c';
    fileUpload.style.background = 'rgba(231, 76, 60, 0.1)';
});

fileUpload.addEventListener('dragleave', () => {
    fileUpload.style.borderColor = '#ddd';
    fileUpload.style.background = 'transparent';
});

fileUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '#ddd';
    fileUpload.style.background = 'transparent';

    if(e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        updateFileList();
    }
});

fileInput.addEventListener('change', updateFileList);

function updateFileList() {
    fileList.innerHTML = '';
    if(fileInput.files.length > 0) {
        const list = document.createElement('ul');
        list.style.listStyle = 'none';

        Array.from(fileInput.files).forEach((file, index) => {
            const item = document.createElement('li');
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.gap = '0.5rem';
            item.style.marginBottom = '0.3rem';

            const icon = document.createElement('i');
            icon.className = 'fas fa-file-image';
            icon.style.color = '#4a6fa5';

            const fileName = document.createElement('span');
            fileName.textContent = file.name;

            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.style.background = 'none';
            removeBtn.style.border = 'none';
            removeBtn.style.color = '#e74c3c';
            removeBtn.style.cursor = 'pointer';
            removeBtn.style.marginLeft = 'auto';
            removeBtn.onclick = () => removeFile(index);

            item.appendChild(icon);
            item.appendChild(fileName);
            item.appendChild(removeBtn);
            list.appendChild(item);
        });

        fileList.appendChild(list);
    }
}

function removeFile(index) {
    const dt = new DataTransfer();
    const files = fileInput.files;

    for(let i = 0; i < files.length; i++) {
        if(i !== index) dt.items.add(files[i]);
    }

    fileInput.files = dt.files;
    updateFileList();
}

// Відправка форми повернення в Telegram
const returnForm = document.getElementById('returnForm');

returnForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Отримуємо дані з форми
    const returnReason = document.getElementById('returnReason').value;
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const returnMethod = document.getElementById('returnMethod').value;
    const details = document.getElementById('details').value.trim();

    // Переклад значень причин повернення
    const reasonTranslations = {
        'wrong': 'Товар не відповідає опису',
        'broken': 'Товар пошкоджений',
        'unsuitable': 'Товар не підійшов',
        'other': 'Інша причина'
    };

    // Переклад способів повернення
    const methodTranslations = {
        'nova_poshta': 'Нова Пошта',
        'ukrposhta': 'Укрпошта',
        'courier': 'Кур\'єр',
        'pickup': 'Самовивіз'
    };

    // Формуємо повідомлення для Telegram
    let message = `🔄 Новий запит на повернення товару!\n\n`;
    message += `👤 Клієнт: ${fullName}\n`;
    message += `📞 Телефон: ${phone}\n`;
    message += `📧 Email: ${email}\n\n`;
    message += `❗ Причина повернення: ${reasonTranslations[returnReason]}\n`;
    message += `🚚 Спосіб повернення: ${methodTranslations[returnMethod]}\n\n`;
    message += `📝 Деталі:\n${details || 'Не вказано'}\n\n`;
    message += `📎 Додано файлів: ${fileInput.files.length}`;

    // Відправляємо в Telegram
    sendToTelegram(message);
});

// Функція відправки в Telegram (використовує ваші дані)
function sendToTelegram(message) {
    const telegramToken = "7944810517:AAHgCFJAQPxV_gal43P4tLf4OXS6T_Oak-A";
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
            if (response.ok) {
                console.log("✅ Запит на повернення надіслано через Telegram");
                return response.json();
            } else {
                throw new Error("Telegram не відповідає");
            }
        })
        .then(() => {
            alert("✅ Ваш запит на повернення успішно надіслано! Наш менеджер зателефонує вам протягом 24 годин.");
            returnForm.reset();
            fileList.innerHTML = '';
        })
        .catch((err) => {
            console.error("⚠️ Помилка відправлення:", err);
            alert("⚠️ Не вдалося відправити запит на повернення. Спробуйте ще раз.");
        });
}

// FAQ акордеон
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(el => {
            el.classList.remove('active');
            el.querySelector('.faq-question i').className = 'fas fa-chevron-down';
        });

        if(!isActive) {
            item.classList.add('active');
            question.querySelector('i').className = 'fas fa-chevron-up';
        }
    });
});