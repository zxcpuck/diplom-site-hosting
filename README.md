# 🛠 README — Додавання нових товарів на сайт "БудМаг"

Цей файл пояснює, як правильно додавати нові товари у файл `products.js`, щоб вони зʼявлялися на сайті в каталозі та на сторінці товару.

---

## 📌 Структура одного товару:

Всі товари зберігаються у вигляді обʼєктів у масиві. Кожен товар має вигляд:

```js
{
    id: УНІКАЛЬНИЙ_НОМЕР, // Наприклад: 35
    name: "НАЗВА_ТОВАРУ", // Наприклад: "Будівельна каска червона"
    category: "КАТЕГОРІЯ_АНГЛІЙСЬКОЮ", // Наприклад: "tools", "paint", "wood"
    price: ЦІНА, // Наприклад: 249
    description: "КОРОТКИЙ_ОПИС", // Наприклад: "Захисна каска для будівельних робіт"
    features: {
        "Характеристика 1": "Значення", // Наприклад: "Матеріал": "Пластик"
        "Характеристика 2": "Значення", // Наприклад: "Колір": "Червоний"
        "Характеристика 3": "Значення"  // Можна додати ще
    },
    images: [
        "ПОСИЛАННЯ_НА_ФОТО1", // Наприклад: "https://example.com/photo1.jpg"
        "ПОСИЛАННЯ_НА_ФОТО2"  // Можна додати ще фото
    ]
}
```

---

## 🔍 Опис кожного поля:

| Поле          | Пояснення                                         | Приклад                                    |
| ------------- | ------------------------------------------------- | ------------------------------------------ |
| `id`          | Унікальний номер товару. Не повинен повторюватися | `35`                                       |
| `name`        | Назва товару                                      | `"Будівельна каска червона"`               |
| `category`    | Категорія англійською для фільтрів                | `"tools"`, `"paint"`, `"wood"`             |
| `price`       | Ціна в гривнях, без лапок                         | `249`                                      |
| `description` | Короткий опис товару                              | `"Захисна каска для робіт на будівництві"` |
| `features`    | Основні характеристики у форматі ключ: значення   | `"Матеріал": "Пластик"`                    |
| `images`      | Масив посилань на зображення                      | `"https://example.com/photo.jpg"`          |

---

## ✅ Правила додавання:

* Не копіюй `id` з інших товарів, кожен має бути **унікальним**.
* `category` має бути англійською: наприклад `"paint"`, `"tools"`, `"wood"`, `"floor"`, `"cement"`, `"plumbing"`.
* Завжди став **кому `,`** після кожного поля, крім останнього у блоці.
* Зображення повинні бути у **лапках** і починатися з `http` або `https`.
* Назва, опис і характеристики мають бути в **лапках**.
* Один товар = один обʼєкт.
* Весь список товарів зберігається в масиві `const products = [ ... ];`

---

## ✨ Приклад готового товару:

```js
{
    id: 101,
    name: "Рулетка вимірювальна 5 м",
    category: "tools",
    price: 89,
    description: "Рулетка з фіксатором та прогумованим корпусом",
    features: {
        "Довжина": "5 метрів",
        "Ширина стрічки": "19 мм",
        "Матеріал корпусу": "Пластик + гума",
        "Країна виробник": "Польща"
    },
    images: [
        "https://example.com/measure-tape-1.jpg",
        "https://example.com/measure-tape-2.jpg"
    ]
}
```

---
