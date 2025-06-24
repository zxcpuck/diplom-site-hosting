const products = [
    // Інструменти (20)
    {
        id: 1,
        name: "Дриль Bosch GSB 550",
        category: "tools",
        price: 2499,
        description: "Потужний дриль Bosch GSB 550 з ударним механізмом, ідеальний для професійного використання.",
        features: {
            "Потужність": "550 Вт",
            "Швидкість обертання": "0-2800 об/хв",
            "Вага": "1.7 кг",
            "Діаметр патрона": "10 мм",
            "Гарантія": "24 місяці",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://bosch-tools.com.ua/image/cache/catalog/06011a1003...-700x500.jpeg",
            "https://bosch-tools.com.ua/image/cache/catalog/06011a1003...-700x500.jpeg",
            "https://bosch-tools.com.ua/image/cache/catalog/06011a1003...-700x500.jpeg",
        ]
    },
    {
        id: 2,
        name: "Шуруповерт Makita DDF453",
        category: "tools",
        price: 2899,
        description: "Професійний акумуляторний шуруповерт Makita DDF453 з високою продуктивністю та надійністю.",
        features: {
            "Потужність": "18 В",
            "Швидкість обертання": "0-1300 об/хв",
            "Вага": "1.8 кг",
            "Діаметр патрона": "13 мм",
            "Гарантія": "36 місяців",
            "Країна виробник": "Японія"
        },
        images: [
            "https://maklta.com.ua/userfiles/DDF453SYX5_makita2_copy.jpg",
            "https://maklta.com.ua/userfiles/DDF453SYX5_makita2_copy.jpg",
            "https://maklta.com.ua/userfiles/DDF453SYX5_makita2_copy.jpg",
        ]
    },
    {
        id: 3,
        name: "Перфоратор Einhell TE-RH 26",
        category: "tools",
        price: 3299,
        description: "Потужний перфоратор Einhell TE-RH 26 для професійного свердління та довбання у бетоні та цеглі.",
        features: {
            "Потужність": "800 Вт",
            "Енергія удару": "2.5 Дж",
            "Швидкість обертання": "0-1250 об/хв",
            "Вага": "2.5 кг",
            "Гарантія": "24 місяці",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://einhell-shop.com.ua/wa-data/public/shop/products/02/32/3202/images/11664/11664.970.jpg",
            "https://einhell-shop.com.ua/wa-data/public/shop/products/02/32/3202/images/11664/11664.970.jpg",
            "https://einhell-shop.com.ua/wa-data/public/shop/products/02/32/3202/images/11664/11664.970.jpg",
        ]
    },
    {
        id: 4,
        name: "Болгарка Metabo WEV 15-125",
        category: "tools",
        price: 4199,
        description: "Професійна кутова шліфувальна машина Metabo WEV 15-125 з регулюванням обертів для різних матеріалів.",
        features: {
            "Потужність": "1550 Вт",
            "Швидкість обертання": "2800-11000 об/хв",
            "Діаметр диску": "125 мм",
            "Вага": "2.5 кг",
            "Гарантія": "36 місяців",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        ]
    },
    {
        id: 5,
        name: "Лобзик DeWalt DW331K",
        category: "tools",
        price: 1899,
        description: "Потужний електричний лобзик DeWalt DW331K з точним регулюванням швидкості для різних типів матеріалів.",
        features: {
            "Потужність": "700 Вт",
            "Швидкість ходу": "0-3100 ход/хв",
            "Глибина різу в дереві": "130 мм",
            "Вага": "2.6 кг",
            "Гарантія": "36 місяців",
            "Країна виробник": "США"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw0R_ZCL5avTI8GgTyDJYR3pfMMn11kCkhw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw0R_ZCL5avTI8GgTyDJYR3pfMMn11kCkhw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw0R_ZCL5avTI8GgTyDJYR3pfMMn11kCkhw&s",
        ]
    },
    {
        id: 6,
        name: "Реноватор Hammer FLEX 150",
        category: "tools",
        price: 1599,
        description: "Багатофункціональний реноватор Hammer FLEX 150 для ремонту та опоряджувальних робіт у важкодоступних місцях.",
        features: {
            "Потужність": "150 Вт",
            "Частота коливань": "15000-22000 1/хв",
            "Вага": "1.1 кг",
            "Кут осциляції": "3.2°",
            "Гарантія": "24 місяці",
            "Країна виробник": "Китай"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKvOXz4PWqKpTPfa4pBIcRZkQx_HgFjrmiw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKvOXz4PWqKpTPfa4pBIcRZkQx_HgFjrmiw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKvOXz4PWqKpTPfa4pBIcRZkQx_HgFjrmiw&s",
        ]
    },
    {
        id: 7,
        name: "Фен будівельний Steinel HG 2320",
        category: "tools",
        price: 3499,
        description: "Професійний будівельний фен Steinel HG 2320 з точним регулюванням температури для різних видів робіт.",
        features: {
            "Потужність": "2300 Вт",
            "Температура повітря": "80-650°C",
            "Витрата повітря": "150-500 л/хв",
            "Вага": "0.9 кг",
            "Гарантія": "36 місяців",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://steinel.in.ua/uploads_shop/prods/1869-2_steinel_hg_2320_e.jpg",
            "https://steinel.in.ua/uploads_shop/prods/1869-2_steinel_hg_2320_e.jpg",
            "https://steinel.in.ua/uploads_shop/prods/1869-2_steinel_hg_2320_e.jpg",
        ]
    },
    {
        id: 8,
        name: "Пила циркулярна Ryobi RCS5145B",
        category: "tools",
        price: 2799,
        description: "Потужна циркулярна пила Ryobi RCS5145B для точного та швидкого різання дерева та інших матеріалів.",
        features: {
            "Потужність": "1400 Вт",
            "Швидкість обертання": "5000 об/хв",
            "Діаметр диску": "190 мм",
            "Глибина різу": "66 мм",
            "Вага": "3.9 кг",
            "Гарантія": "24 місяці",
            "Країна виробник": "Японія"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwFtXeyIy0zTm8tXLPpOwHLDXVI2ONtsTYQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwFtXeyIy0zTm8tXLPpOwHLDXVI2ONtsTYQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwFtXeyIy0zTm8tXLPpOwHLDXVI2ONtsTYQ&s",
        ]
    },
    {
        id: 9,
        name: "Викрутка набір 12 шт",
        category: "tools",
        price: 299,
        description: "Професійний набір викруток із 12 штук різних розмірів та типів, виготовлених з якісної хром-ванадієвої сталі.",
        features: {
            "Кількість": "12 шт",
            "Типи": "Шліц, Філіпс, Torx, HEX",
            "Матеріал рукоятки": "Двокомпонентний пластик",
            "Намагнічені наконечники": "Так",
            "Гарантія": "12 місяців",
            "Країна виробник": "Тайвань"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Mwd4l533v4VWeqBOOQGBur_3A30b-POCvw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Mwd4l533v4VWeqBOOQGBur_3A30b-POCvw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Mwd4l533v4VWeqBOOQGBur_3A30b-POCvw&s",
        ]
    },
    {
        id: 10,
        name: "Молоток Stanley FatMax",
        category: "tools",
        price: 499,
        description: "Професійний молоток Stanley FatMax з ергономічною рукояткою та міцною головкою для важких будівельних робіт.",
        features: {
            "Вага": "600 г",
            "Матеріал головки": "Загартована сталь",
            "Матеріал рукоятки": "Фібергласовий композит",
            "Амортизація": "Так",
            "Гарантія": "Довічна",
            "Країна виробник": "США"
        },
        images: [
            "https://gurkit.ua/static/uploads/processed/23/16/58412c84ea00aaf44116ef03e2a31623-550x550.jpg",
            "https://gurkit.ua/static/uploads/processed/23/16/58412c84ea00aaf44116ef03e2a31623-550x550.jpg",
            "https://gurkit.ua/static/uploads/processed/23/16/58412c84ea00aaf44116ef03e2a31623-550x550.jpg",
        ]
    },
    {
        id: 11,
        name: "Ключ газовий 24\"",
        category: "tools",
        price: 349,
        description: "Надійний газовий ключ довжиною 24 дюйми для роботи з трубами різного діаметру.",
        features: {
            "Довжина": "24 дюйми",
            "Матеріал": "Хром-ванадієва сталь",
            "Максимальний діаметр труби": "2.5 дюйма",
            "Рукоятка": "Прогумована",
            "Гарантія": "24 місяці",
            "Країна виробник": "Польща"
        },
        images: [
            "https://images.prom.ua/2619004394_w600_h600_2619004394.jpg",
            "https://images.prom.ua/2619004394_w600_h600_2619004394.jpg",
            "https://images.prom.ua/2619004394_w600_h600_2619004394.jpg",
        ]
    },
    {
        id: 12,
        name: "Пасатижі Kombi",
        category: "tools",
        price: 199,
        description: "Універсальні пасатижі Kombi для захоплення, перекушування та зняття ізоляції з проводів.",
        features: {
            "Довжина": "200 мм",
            "Матеріал": "Хром-ванадієва сталь",
            "Рукоятки": "Ізольовані, до 1000 В",
            "Додаткові функції": "Зняття ізоляції, перекушування",
            "Гарантія": "12 місяців",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://agrozon.com.ua/files/resized/products/pasatizhi-kombi-125-mm.600x800.jpg",
            "https://agrozon.com.ua/files/resized/products/pasatizhi-kombi-125-mm.600x800.jpg",
            "https://agrozon.com.ua/files/resized/products/pasatizhi-kombi-125-mm.600x800.jpg",
        ]
    },
    {
        id: 13,
        name: "Рівень лазерний Bosch GLL 50",
        category: "tools",
        price: 5999,
        description: "Точний лазерний нівелір Bosch GLL 50 з функцією самовирівнювання для професійних вимірювань.",
        features: {
            "Діапазон вимірювання": "до 50 м",
            "Точність": "±0.3 мм/м",
            "Час роботи": "до 15 год",
            "Кількість променів": "3 (вертикальні та горизонтальні)",
            "Гарантія": "24 місяці",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://bosch-tools.com.ua/image/cache/catalog/products/izmeritelnaya-tehnika/nivelir-lazernyj-bosch-gll-2-50-professional-700x500.jpg",
            "https://bosch-tools.com.ua/image/cache/catalog/products/izmeritelnaya-tehnika/nivelir-lazernyj-bosch-gll-2-50-professional-700x500.jpg",
            "https://bosch-tools.com.ua/image/cache/catalog/products/izmeritelnaya-tehnika/nivelir-lazernyj-bosch-gll-2-50-professional-700x500.jpg",
        ]
    },
    {
        id: 14,
        name: "Ножівка по металу",
        category: "tools",
        price: 149,
        description: "Міцна ножівка по металу з надійною рамкою та ергономічною рукояткою для точного різання.",
        features: {
            "Довжина полотна": "300 мм",
            "Матеріал рамки": "Сталь",
            "Матеріал рукоятки": "Прогумований пластик",
            "Змінні полотна": "Так",
            "Гарантія": "12 місяців",
            "Країна виробник": "Польща"
        },
        images: [
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_41-530.jpg",
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_41-530.jpg",
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_41-530.jpg",
        ]
    },
    {
        id: 15,
        name: "Клещі для гіпсокартону",
        category: "tools",
        price: 399,
        description: "Спеціальні клещі для роботи з гіпсокартоном, які полегшують різання та формування отворів.",
        features: {
            "Довжина": "225 мм",
            "Матеріал": "Інструментальна сталь",
            "Рукоятки": "Двокомпонентні, ергономічні",
            "Призначення": "Вирізання отворів, обрізка країв",
            "Гарантія": "12 місяців",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://images.prom.ua/4416014568_w600_h600_4416014568.jpg",
            "https://images.prom.ua/4416014568_w600_h600_4416014568.jpg",
            "https://images.prom.ua/4416014568_w600_h600_4416014568.jpg",
        ]
    },
    {
        id: 16,
        name: "Фреза по дереву 35мм",
        category: "tools",
        price: 129,
        description: "Високоякісна фреза по дереву діаметром 35 мм для професійної обробки дерев'яних поверхонь.",
        features: {
            "Діаметр": "35 мм",
            "Матеріал": "Твердосплавний метал",
            "Хвостовик": "8 мм",
            "Кількість зубів": "6",
            "Гарантія": "12 місяців",
            "Країна виробник": "Австрія"
        },
        images: [
            "https://virok.com.ua/media/catalog/product/cache/2/image/500x500/040ec09b1e35df139433887a97daa66f/y/a/yato_yt-33011.jpg",
            "https://virok.com.ua/media/catalog/product/cache/2/image/500x500/040ec09b1e35df139433887a97daa66f/y/a/yato_yt-33011.jpg",
            "https://virok.com.ua/media/catalog/product/cache/2/image/500x500/040ec09b1e35df139433887a97daa66f/y/a/yato_yt-33011.jpg",
        ]
    },
    {
        id: 17,
        name: "Набір свердел по бетону 6шт",
        category: "tools",
        price: 249,
        description: "Професійний набір свердел по бетону з твердосплавними наконечниками для ефективного свердління.",
        features: {
            "Кількість": "6 шт",
            "Діаметри": "4, 5, 6, 8, 10, 12 мм",
            "Матеріал": "Твердосплавна сталь",
            "Довжина": "90-150 мм",
            "Гарантія": "12 місяців",
            "Країна виробник": "Німеччина"
        },
        images: [
            "https://content1.rozetka.com.ua/goods/images/big/10608391.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/10608391.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/10608391.jpg",
        ]
    },
    {
        id: 18,
        name: "Стіс Sturm! BG6010",
        category: "tools",
        price: 899,
        description: "Електричний стіс Sturm! BG6010 для точного та швидкого різання деревини під різними кутами.",
        features: {
            "Потужність": "1600 Вт",
            "Діаметр диску": "210 мм",
            "Швидкість обертання": "5000 об/хв",
            "Куг нахилу": "0-45°",
            "Вага": "7.5 кг",
            "Гарантія": "24 місяці",
            "Країна виробник": "Китай"
        },
        images: [
            "https://sturm.ua/wp-content/uploads/2021/12/bg6010sf.jpg",
            "https://sturm.ua/wp-content/uploads/2021/12/bg6010sf.jpg",
            "https://sturm.ua/wp-content/uploads/2021/12/bg6010sf.jpg",
        ]
    },
    {
        id: 19,
        name: "Кутник будівельний",
        category: "tools",
        price: 89,
        description: "Металевий будівельний кутник для проведення точних розмітчих робіт та перевірки прямих кутів.",
        features: {
            "Довжина": "300 мм",
            "Матеріал": "Нержавіюча сталь",
            "Точність": "±0.5 мм",
            "Маркування": "Метрична шкала",
            "Гарантія": "12 місяців",
            "Країна виробник": "Чехія"
        },
        images: [
            "https://kulibin.com.ua/upload/resize_cache/iblock/1c4/zg1r8drm3q9c45b3gcakysaasirc63je/500_400_1/30_3300.jpg",
            "https://kulibin.com.ua/upload/resize_cache/iblock/1c4/zg1r8drm3q9c45b3gcakysaasirc63je/500_400_1/30_3300.jpg",
            "https://kulibin.com.ua/upload/resize_cache/iblock/1c4/zg1r8drm3q9c45b3gcakysaasirc63je/500_400_1/30_3300.jpg",
        ]
    },
    {
        id: 20,
        name: "Рулетка 5м Stanley",
        category: "tools",
        price: 199,
        description: "Професійна рулетка Stanley довжиною 5 метрів з прогумованим корпусом та міцним клипсою для пояса.",
        features: {
            "Довжина": "5 м",
            "Ширина стрічки": "19 мм",
            "Матеріал корпусу": "ABS пластик з гумовими вставками",
            "Фіксатор": "Так",
            "Гарантія": "Довічна",
            "Країна виробник": "США"
        },
        images: [
            "https://stanleys.ua/image/cache/41-large_default/ruletka-stanley-global-tape-5m-0-30-497-1000x1000.jpg",
            "https://stanleys.ua/image/cache/41-large_default/ruletka-stanley-global-tape-5m-0-30-497-1000x1000.jpg",
            "https://stanleys.ua/image/cache/41-large_default/ruletka-stanley-global-tape-5m-0-30-497-1000x1000.jpg",
        ]
    },

    // Фарби та лаки (15)
    {
        id: 21,
        name: "Фарба акрилова біла 10л",
        category: "paint",
        price: 899,
        description: "Якісна акрилова фарба для внутрішніх і зовнішніх робіт, забезпечує довговічний результат.",
        features: {
            "Об'єм": "10 л",
            "Колір": "Білий",
            "Основа": "Акрилова",
            "Призначення": "Для стін і стель",
            "Країна виробник": "Україна"
        },
        images: [
            "https://cdn.27.ua/799/c9/de/182750_8.jpeg",
            "https://cdn.27.ua/799/c9/de/182750_8.jpeg",
            "https://cdn.27.ua/799/c9/de/182750_8.jpeg",
        ]
    },
    {
        id: 22,
        name: "Фарба для фасаду TERRACO 5л",
        category: "paint",
        price: 1299,
        description: "Фасадна фарба TERRACO для створення міцного покриття, стійкого до атмосферних впливів.",
        features: {
            "Об'єм": "5 л",
            "Колір": "Білий",
            "Тип": "Фасадна",
            "Захист від вологи": "Так",
            "Країна виробник": "Швеція"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gDPENcEPGUCaO3dW9F0mff_amTFAm3Va5g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gDPENcEPGUCaO3dW9F0mff_amTFAm3Va5g&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1gDPENcEPGUCaO3dW9F0mff_amTFAm3Va5g&s",
        ]
    },
    {
        id: 23,
        name: "Емаль ПФ-115 чорна 2.5кг",
        category: "paint",
        price: 349,
        description: "Чорна емаль для металевих і дерев'яних поверхонь з високим рівнем блиску.",
        features: {
            "Об'єм": "2.5 кг",
            "Колір": "Чорний",
            "Тип": "Емаль ПФ-115",
            "Стійкість до корозії": "Так",
            "Країна виробник": "Україна"
        },
        images: [
            "https://content.rozetka.com.ua/goods/images/big/399754950.jpg",
            "https://content.rozetka.com.ua/goods/images/big/399754950.jpg",
            "https://content.rozetka.com.ua/goods/images/big/399754950.jpg",
        ]
    },
    {
        id: 24,
        name: "Лак паркетний Bona Mega 2.5л",
        category: "paint",
        price: 1599,
        description: "Паркетний лак Bona Mega для професійного покриття підлоги з деревини.",
        features: {
            "Об'єм": "2.5 л",
            "Тип": "Паркетний лак",
            "Стійкість до зносу": "Висока",
            "Призначення": "Для дерев'яної підлоги",
            "Країна виробник": "Швеція"
        },
        images: [
            "https://content.rozetka.com.ua/goods/images/big/396259219.jpg",
            "https://content.rozetka.com.ua/goods/images/big/396259219.jpg",
            "https://content.rozetka.com.ua/goods/images/big/396259219.jpg",
        ]
    },
    {
        id: 25,
        name: "Грунтовка глибокого проникнення",
        category: "paint",
        price: 299,
        description: "Грунтовка для підготовки поверхонь перед фарбуванням, глибокого проникнення.",
        features: {
            "Об'єм": "10 л",
            "Тип": "Глибокого проникнення",
            "Призначення": "Для стін і підлоги",
            "Колір": "Прозорий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://fenixcentr.dp.ua/image/cache/catalog/himija/gruntovki/943097572_w640_h640_cid152732_pid599896121-bf77667f-1000x1000.jpg",
            "https://fenixcentr.dp.ua/image/cache/catalog/himija/gruntovki/943097572_w640_h640_cid152732_pid599896121-bf77667f-1000x1000.jpg",
            "https://fenixcentr.dp.ua/image/cache/catalog/himija/gruntovki/943097572_w640_h640_cid152732_pid599896121-bf77667f-1000x1000.jpg",
        ]
    },
    {
        id: 26,
        name: "Аерозольна фарба чорна",
        category: "paint",
        price: 149,
        description: "Аерозольна фарба чорного кольору для швидкого та зручного фарбування поверхонь.",
        features: {
            "Об'єм": "400 мл",
            "Тип": "Аерозольна",
            "Призначення": "Для металу, дерева, пластику",
            "Колір": "Чорний",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/4856474606_w600_h600_4856474606.jpg",
            "https://images.prom.ua/4856474606_w600_h600_4856474606.jpg",
            "https://images.prom.ua/4856474606_w600_h600_4856474606.jpg",
        ]
    },
    {
        id: 27,
        name: "Антигрибок для вологих приміщень",
        category: "paint",
        price: 399,
        description: "Засіб для боротьби з грибком та пліснявою у вологих приміщеннях.",
        features: {
            "Об'єм": "1 л",
            "Тип": "Антигрибковий розчин",
            "Призначення": "Для ванних кімнат, кухонь",
            "Колір": "Прозорий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://rolax.com.ua/media/CACHE/images/catalog/020a993f-75b3-446e-8296-d3779005d979/0a0fca5c9641608d293ffd4502e72000.png",
            "https://rolax.com.ua/media/CACHE/images/catalog/020a993f-75b3-446e-8296-d3779005d979/0a0fca5c9641608d293ffd4502e72000.png",
            "https://rolax.com.ua/media/CACHE/images/catalog/020a993f-75b3-446e-8296-d3779005d979/0a0fca5c9641608d293ffd4502e72000.png",
        ]
    },
    {
        id: 28,
        name: "Фарба для радіаторів",
        category: "paint",
        price: 449,
        description: "Термостійка фарба для радіаторів опалення, що витримує високі температури.",
        features: {
            "Об'єм": "0.8 л",
            "Тип": "Термостійка фарба",
            "Призначення": "Для металевих радіаторів",
            "Колір": "Білий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/4469069638_w600_h600_4469069638.jpg",
            "https://images.prom.ua/4469069638_w600_h600_4469069638.jpg",
            "https://images.prom.ua/4469069638_w600_h600_4469069638.jpg",
        ]
    },
    {
        id: 29,
        name: "Лак для меблів глянцевий",
        category: "paint",
        price: 599,
        description: "Глянцевий лак для меблів, що захищає та надає блиск поверхням з дерева.",
        features: {
            "Об'єм": "0.9 л",
            "Тип": "Глянцевий лак",
            "Призначення": "Для меблів з дерева",
            "Колір": "Прозорий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/5223734911_w300_h300_lak-dlya-dereva.jpg",
            "https://images.prom.ua/5223734911_w300_h300_lak-dlya-dereva.jpg",
            "https://images.prom.ua/5223734911_w300_h300_lak-dlya-dereva.jpg",
        ]
    },
    {
        id: 30,
        name: "Фарба молоткова по металу",
        category: "paint",
        price: 499,
        description: "Фарба молоткова для металевих поверхонь із декоративним ефектом.",
        features: {
            "Об'єм": "0.8 л",
            "Тип": "Молоткова фарба",
            "Призначення": "Для металу",
            "Колір": "Сірий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://farba4you.com/wp-content/uploads/2022/12/emal-molotok.jpg",
            "https://farba4you.com/wp-content/uploads/2022/12/emal-molotok.jpg",
            "https://farba4you.com/wp-content/uploads/2022/12/emal-molotok.jpg",
        ]
    },
    {
        id: 31,
        name: "Відбілювач для дерева",
        category: "paint",
        price: 249,
        description: "Засіб для відбілювання та оновлення дерев'яних поверхонь.",
        features: {
            "Об'єм": "0.7 л",
            "Тип": "Відбілювач",
            "Призначення": "Для дерева",
            "Колір": "Прозорий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://oxidom.com/content/images/22/384x536l50nn0/64318942175843.jpg",
            "https://oxidom.com/content/images/22/384x536l50nn0/64318942175843.jpg",
            "https://oxidom.com/content/images/22/384x536l50nn0/64318942175843.jpg",
        ]
    },
    {
        id: 32,
        name: "Колірна паста червона",
        category: "paint",
        price: 99,
        description: "Концентрована червона колірна паста для додавання відтінку фарбам і лакам.",
        features: {
            "Об'єм": "0.25 л",
            "Тип": "Колірна паста",
            "Призначення": "Для фарб та лаків",
            "Колір": "Червоний",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/3043702333_w600_h600_3043702333.jpg",
            "https://images.prom.ua/3043702333_w600_h600_3043702333.jpg",
            "https://images.prom.ua/3043702333_w600_h600_3043702333.jpg",
        ]
    },
    {
        id: 33,
        name: "Фарба для підлоги епоксидна",
        category: "paint",
        price: 1999,
        description: "Епоксидна фарба для підлоги з високою зносостійкістю і довговічністю.",
        features: {
            "Об'єм": "5 л",
            "Тип": "Епоксидна фарба",
            "Призначення": "Для бетонних підлог",
            "Колір": "Сірий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/4807147409_w600_h600_4807147409.jpg",
            "https://images.prom.ua/4807147409_w600_h600_4807147409.jpg",
            "https://images.prom.ua/4807147409_w600_h600_4807147409.jpg",
        ]
    },
    {
        id: 34,
        name: "Лак яхтний",
        category: "paint",
        price: 899,
        description: "Яхтний лак для захисту деревини від вологи та ультрафіолету.",
        features: {
            "Об'єм": "0.9 л",
            "Тип": "Яхтний лак",
            "Призначення": "Для дерев'яних поверхонь на відкритому повітрі",
            "Колір": "Прозорий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://kompozit.ua/content/images/35/1500x1500l80mc0/catalogzasobi_dlya_zakhistu_derevinilakilak_yakhtniy_poliuretanoviy_kompozit-30758040619638.jpg",
            "https://kompozit.ua/content/images/35/1500x1500l80mc0/catalogzasobi_dlya_zakhistu_derevinilakilak_yakhtniy_poliuretanoviy_kompozit-30758040619638.jpg",
            "https://kompozit.ua/content/images/35/1500x1500l80mc0/catalogzasobi_dlya_zakhistu_derevinilakilak_yakhtniy_poliuretanoviy_kompozit-30758040619638.jpg",
        ]
    },
    {
        id: 35,
        name: "Декоративна штукатурка",
        category: "paint",
        price: 1299,
        description: "Декоративна штукатурка для створення текстурних оздоблень на стінах.",
        features: {
            "Об'єм": "25 кг",
            "Тип": "Штукатурка декоративна",
            "Призначення": "Для внутрішніх і зовнішніх робіт",
            "Колір": "Світло-сірий",
            "Країна виробник": "Україна"
        },
        images: [
            "https://img2.kub.in.ua/content/400-400/products/4678/acd1104045c82c8237b4978e710cfbd1.webp",
            "https://img2.kub.in.ua/content/400-400/products/4678/acd1104045c82c8237b4978e710cfbd1.webp",
            "https://img2.kub.in.ua/content/400-400/products/4678/acd1104045c82c8237b4978e710cfbd1.webp",
        ]
    },

    // Закріплення (25)
    {
        id: 36,
        name: "Цвях 100мм (1кг)",
        category: "hardware",
        price: 50,
        description: "Стандартні цвяхи довжиною 100мм в упаковці 1 кг, підходять для різних будівельних робіт.",
        features: {
            "Довжина": "100 мм",
            "Вага упаковки": "1 кг",
            "Матеріал": "Сталь",
            "Призначення": "Будівництво, деревообробка",
            "Країна виробник": "Україна"
        },
        images: [
            "https://fenixcentr.kiev.ua/image/cache/catalog/obschestroj/metizy/gvozd-stroitelnyj-1000x1000.jpg",
            "https://fenixcentr.kiev.ua/image/cache/catalog/obschestroj/metizy/gvozd-stroitelnyj-1000x1000.jpg",
            "https://fenixcentr.kiev.ua/image/cache/catalog/obschestroj/metizy/gvozd-stroitelnyj-1000x1000.jpg",
        ]
    },
    {
        id: 37,
        name: "Шуруп по дереву 4.5x70мм (100шт)",
        category: "hardware",
        price: 129,
        description: "Шурупи для дерева розміром 4.5x70 мм, упаковка 100 штук, забезпечують надійне кріплення.",
        features: {
            "Розмір": "4.5x70 мм",
            "Кількість в упаковці": "100 шт",
            "Матеріал": "Сталь з антикорозійним покриттям",
            "Призначення": "Кріплення деревини",
            "Країна виробник": "Україна"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcxG85IO439NXOOG01fE7RbVnGlK8EYZgtw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcxG85IO439NXOOG01fE7RbVnGlK8EYZgtw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcxG85IO439NXOOG01fE7RbVnGlK8EYZgtw&s",
        ]
    },
    {
        id: 38,
        name: "Дюбель-гвинт 8x60мм",
        category: "hardware",
        price: 2.5,
        description: "Дюбель-гвинт 8x60 мм для міцного кріплення в бетоні та цеглі.",
        features: {
            "Розмір": "8x60 мм",
            "Матеріал": "Пластик + метал",
            "Призначення": "Кріплення в бетоні, цеглі",
            "Країна виробник": "Україна"
        },
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULDMq6pOCrWpqACVL7yV0KGd16VTyNrV28Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULDMq6pOCrWpqACVL7yV0KGd16VTyNrV28Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULDMq6pOCrWpqACVL7yV0KGd16VTyNrV28Q&s",
        ]
    },
    {
        id: 39,
        name: "Анкерний болт M10",
        category: "hardware",
        price: 29,
        description: "Анкерний болт M10 для надійного кріплення важких конструкцій.",
        features: {
            "Розмір": "M10",
            "Матеріал": "Сталь",
            "Призначення": "Будівельне кріплення",
            "Країна виробник": "Україна"
        },
        images: [
            "https://content.rozetka.com.ua/goods/images/big/74088401.jpg",
            "https://content.rozetka.com.ua/goods/images/big/74088401.jpg",
            "https://content.rozetka.com.ua/goods/images/big/74088401.jpg",
        ]
    },
    {
        id: 40,
        name: "Самонаріз по металу 4.2x16мм",
        category: "hardware",
        price: 1.2,
        description: "Самонарізи для металу розміром 4.2x16 мм для швидкого та надійного монтажу.",
        features: {
            "Розмір": "4.2x16 мм",
            "Матеріал": "Сталь",
            "Призначення": "Кріплення металевих конструкцій",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/5691890265_w200_h200_5691890265.jpg",
            "https://images.prom.ua/5691890265_w200_h200_5691890265.jpg",
            "https://images.prom.ua/5691890265_w200_h200_5691890265.jpg",
        ]
    },
    {
        id: 41,
        name: "Гайка M6 (100шт)",
        category: "hardware",
        price: 89,
        description: "Комплект гайок M6, 100 штук в упаковці, для різьбових з'єднань.",
        features: {
            "Розмір": "M6",
            "Кількість в упаковці": "100 шт",
            "Матеріал": "Сталь",
            "Призначення": "Різьбові з'єднання",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/6174690213_w600_h600_6174690213.jpg",
            "https://images.prom.ua/6174690213_w600_h600_6174690213.jpg",
            "https://images.prom.ua/6174690213_w600_h600_6174690213.jpg",
        ]
    },
    {
        id: 42,
        name: "Шайба пружинна",
        category: "hardware",
        price: 0.5,
        description: "Пружинна шайба для запобігання ослабленню з'єднань при вібрації.",
        features: {
            "Тип": "Пружинна",
            "Матеріал": "Сталь",
            "Призначення": "Фіксація з'єднань",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/299075296_shajba-pruzhinna-grover.jpg",
            "https://images.prom.ua/299075296_shajba-pruzhinna-grover.jpg",
            "https://images.prom.ua/299075296_shajba-pruzhinna-grover.jpg",
        ]
    },
    {
        id: 43,
        name: "Шпилька різьбова M8x1м",
        category: "hardware",
        price: 49,
        description: "Різьбова шпилька M8 довжиною 1 м для кріплення конструкцій.",
        features: {
            "Розмір": "M8x1 м",
            "Матеріал": "Сталь",
            "Призначення": "Кріплення",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/2539218178_shpilka-rizbova-m8h1000.jpg",
            "https://images.prom.ua/2539218178_shpilka-rizbova-m8h1000.jpg",
            "https://images.prom.ua/2539218178_shpilka-rizbova-m8h1000.jpg",
        ]
    },
    {
        id: 44,
        name: "Кріплення для гіпсокартону",
        category: "hardware",
        price: 3.5,
        description: "Спеціальне кріплення для надійного монтажу гіпсокартонних листів.",
        features: {
            "Тип": "Кріплення",
            "Матеріал": "Пластик",
            "Призначення": "Монтаж гіпсокартону",
            "Країна виробник": "Україна"
        },
        images: [
            "https://www.stroy-stal.com.ua/wp-content/uploads/2018/12/elments-systems.jpg",
            "https://www.stroy-stal.com.ua/wp-content/uploads/2018/12/elments-systems.jpg",
            "https://www.stroy-stal.com.ua/wp-content/uploads/2018/12/elments-systems.jpg",
        ]
    },
    {
        id: 45,
        name: "Скоба будівельна 50мм",
        category: "hardware",
        price: 1.8,
        description: "Будівельна скоба довжиною 50 мм для кріплення різних матеріалів.",
        features: {
            "Довжина": "50 мм",
            "Матеріал": "Сталь",
            "Призначення": "Кріплення матеріалів",
            "Країна виробник": "Україна"
        },
        images: [
            "https://cdn.27.ua/sc--media--prod/default/d7/f2/cb/d7f2cb9f-869d-4e5e-88d1-99b4018d8e45.png",
            "https://cdn.27.ua/sc--media--prod/default/d7/f2/cb/d7f2cb9f-869d-4e5e-88d1-99b4018d8e45.png",
            "https://cdn.27.ua/sc--media--prod/default/d7/f2/cb/d7f2cb9f-869d-4e5e-88d1-99b4018d8e45.png",
        ]
    },
    {
        id: 46,
        name: "Кільце для кабелю",
        category: "hardware",
        price: 0.7,
        description: "Кільце для фіксації кабелю, забезпечує акуратне укладання та захист.",
        features: {
            "Тип": "Кабельне кільце",
            "Матеріал": "Пластик",
            "Призначення": "Фіксація кабелів",
            "Країна виробник": "Україна"
        },
        images: [
            "https://paris.kiev.ua/image/cache/catalog/AG_PG_135/75068-1000x1000.jpg",
            "https://paris.kiev.ua/image/cache/catalog/AG_PG_135/75068-1000x1000.jpg",
            "https://paris.kiev.ua/image/cache/catalog/AG_PG_135/75068-1000x1000.jpg",
        ]
    },
    {
        id: 47,
        name: "Хомут 20-40мм",
        category: "hardware",
        price: 2.3,
        description: "Регульований хомут діаметром 20-40мм для фіксації труб або шлангів.",
        features: {
            "Діаметр": "20-40 мм",
            "Матеріал": "Сталь",
            "Призначення": "Фіксація труб та шлангів",
            "Країна виробник": "Україна"
        },
        images: [
            "https://images.prom.ua/2640921181_w600_h600_2640921181.jpg",
            "https://images.prom.ua/2640921181_w600_h600_2640921181.jpg",
            "https://images.prom.ua/2640921181_w600_h600_2640921181.jpg",
        ]
    },
    {
        id: 48,
        name: "Кліпса для труб",
        category: "hardware",
        price: 4.5,
        description: "Кліпса для швидкого та надійного монтажу труб різного діаметру.",
        features: {
            "Тип": "Кліпса",
            "Матеріал": "Пластик",
            "Призначення": "Монтаж труб",
            "Країна виробник": "Україна"
        },
        images: [
            "https://aquapolis.ua/media/mf_webp/jpg/media/catalog/product/cache/caf492e424575e14ff698ee26b7a7c6b/_/e/_era__1_35.webp",
            "https://aquapolis.ua/media/mf_webp/jpg/media/catalog/product/cache/caf492e424575e14ff698ee26b7a7c6b/_/e/_era__1_35.webp",
            "https://aquapolis.ua/media/mf_webp/jpg/media/catalog/product/cache/caf492e424575e14ff698ee26b7a7c6b/_/e/_era__1_35.webp",
        ]
    },
    {
        id: 49,
        name: "Кронштейн для полиці",
        category: "hardware",
        price: 39,
        description: "Міцний металевий кронштейн для встановлення полиць у приміщеннях.",
        features: {
            "Матеріал": "Метал",
            "Розмір": "Універсальний",
            "Призначення": "Монтаж полиць",
            "Країна виробник": "Україна"
        },
        images: [
            "https://emt-express.com/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BB%D0%BA%D0%B8-1-min.jpg",
            "https://emt-express.com/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BB%D0%BA%D0%B8-1-min.jpg",
            "https://emt-express.com/wp-content/uploads/2019/05/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B5%D0%B9%D0%BD-%D0%BF%D0%BE%D0%BB%D0%BA%D0%B8-1-min.jpg",
        ]
    },
    {
        id: 50,
        name: "Кутник металевий 50x50мм",
        category: "hardware",
        price: 19,
        description: "Металевий кутник розміром 50x50мм для з'єднання конструкцій.",
        features: {
            "Розмір": "50x50 мм",
            "Матеріал": "Метал",
            "Призначення": "З'єднання конструкцій",
            "Країна виробник": "Україна"
        },
        images: [
            "https://berkut.info/content/images/30/480x320l50nn0/74482080295202.jpeg",
            "https://berkut.info/content/images/30/480x320l50nn0/74482080295202.jpeg",
            "https://berkut.info/content/images/30/480x320l50nn0/74482080295202.jpeg",
        ]
    },
    {
        id: 51,
        name: "Петля меблева 40мм",
        category: "hardware",
        price: 8,
        description: "Меблева петля розміром 40мм для дверцят шаф та інших меблів.",
        features: {
            "Розмір": "40 мм",
            "Матеріал": "Метал",
            "Призначення": "Монтаж меблевих дверцят",
            "Країна виробник": "Україна"
        },
        images: [
            "https://milah-master.ua/image/cache/catalog/zavisi/petlya-mebelnaya-f11301-9040-mm-ukraina-4664-1200x1200.jpg",
            "https://milah-master.ua/image/cache/catalog/zavisi/petlya-mebelnaya-f11301-9040-mm-ukraina-4664-1200x1200.jpg",
            "https://milah-master.ua/image/cache/catalog/zavisi/petlya-mebelnaya-f11301-9040-mm-ukraina-4664-1200x1200.jpg",
        ]
    },
    {
        "id": 52,
        "name": "Завіса для дверей",
        "category": "hardware",
        "price": 129,
        "description": "Міцна завіса для встановлення вхідних або міжкімнатних дверей.",
        "features": {
            "Тип": "Дверна завіса",
            "Матеріал": "Сталь",
            "Призначення": "Монтаж дверей",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://sirius-ltd.com.ua/image/cache/catalog/upload/iblock/642/00220073_0-600x600.jpg",
            "https://sirius-ltd.com.ua/image/cache/catalog/upload/iblock/642/00220073_0-600x600.jpg",
            "https://sirius-ltd.com.ua/image/cache/catalog/upload/iblock/642/00220073_0-600x600.jpg",
        ]
    },
    {
        "id": 53,
        "name": "Ролик для роздвижних дверей",
        "category": "hardware",
        "price": 45,
        "description": "Ролик для плавного та надійного руху роздвижних дверей.",
        "features": {
            "Тип": "Ролик",
            "Матеріал": "Метал",
            "Призначення": "Роздвижні двері",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://alta-group.com.ua/image/cache/catalog/downloads/2222/Rizne/FAST/rolik-800x800.jpg",
            "https://alta-group.com.ua/image/cache/catalog/downloads/2222/Rizne/FAST/rolik-800x800.jpg",
            "https://alta-group.com.ua/image/cache/catalog/downloads/2222/Rizne/FAST/rolik-800x800.jpg",
        ]
    },
    {
        "id": 54,
        "name": "Скоба для сходів",
        "category": "hardware",
        "price": 12,
        "description": "Скоба для фіксації деталей сходів під час монтажу.",
        "features": {
            "Тип": "Скоба",
            "Матеріал": "Метал",
            "Призначення": "Монтаж сходів",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://cdn.27.ua/sc--media--prod/default/98/3b/da/983bda7d-762e-4e05-b6f9-b137d9add7b2.jpg",
            "https://cdn.27.ua/sc--media--prod/default/98/3b/da/983bda7d-762e-4e05-b6f9-b137d9add7b2.jpg",
            "https://cdn.27.ua/sc--media--prod/default/98/3b/da/983bda7d-762e-4e05-b6f9-b137d9add7b2.jpg",
        ]
    },
    {
        "id": 55,
        "name": "Карабін будівельний",
        "category": "hardware",
        "price": 25,
        "description": "Міцний будівельний карабін для кріплення вантажів або монтажу конструкцій.",
        "features": {
            "Тип": "Карабін",
            "Матеріал": "Сталь",
            "Призначення": "Будівельні роботи",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://images.prom.ua/1494626219_w200_h200_karabin-pozharnyj-4mm40.jpg",
            "https://images.prom.ua/1494626219_w200_h200_karabin-pozharnyj-4mm40.jpg",
            "https://images.prom.ua/1494626219_w200_h200_karabin-pozharnyj-4mm40.jpg",
        ]
    },
    {
        "id": 56,
        "name": "Ланцюг оцинкований 1м",
        "category": "hardware",
        "price": 89,
        "description": "Оцинкований ланцюг довжиною 1 метр для кріплення або вантажних робіт.",
        "features": {
            "Довжина": "1 м",
            "Матеріал": "Оцинкована сталь",
            "Призначення": "Кріплення, вантажні роботи",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://images.prom.ua/4361016183_lantsyug-dovgolankovij-otsinkovanij.jpg",
            "https://images.prom.ua/4361016183_lantsyug-dovgolankovij-otsinkovanij.jpg",
            "https://images.prom.ua/4361016183_lantsyug-dovgolankovij-otsinkovanij.jpg",
        ]
    },
    {
        "id": 57,
        "name": "Трос сталевий 3мм",
        "category": "hardware",
        "price": 15,
        "description": "Міцний сталевий трос діаметром 3мм для різних видів кріплення та підвішування.",
        "features": {
            "Діаметр": "3 мм",
            "Матеріал": "Сталь",
            "Призначення": "Кріплення, підвішування",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://content.secur.ua/goods/images/big/_-_-3__2.webp",
            "https://content.secur.ua/goods/images/big/_-_-3__2.webp",
            "https://content.secur.ua/goods/images/big/_-_-3__2.webp",
        ]
    },
    {
        "id": 58,
        "name": "Рифлений лист 1x2м",
        "category": "hardware",
        "price": 799,
        "description": "Рифлений металевий лист розміром 1x2 метри, ідеально підходить для будівельних робіт або огороджень.",
        "features": {
            "Розмір": "1x2 м",
            "Матеріал": "Метал",
            "Призначення": "Будівельні роботи, огородження",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://alumarket.com.ua/image/cache/catalog/NerjList/3/image-catalog-category-nerjaveika-list-rifl-nerj-500x500.png",
            "https://alumarket.com.ua/image/cache/catalog/NerjList/3/image-catalog-category-nerjaveika-list-rifl-nerj-500x500.png",
            "https://alumarket.com.ua/image/cache/catalog/NerjList/3/image-catalog-category-nerjaveika-list-rifl-nerj-500x500.png",
        ]
    },
    {
        "id": 59,
        "name": "Сітка рабиця 1.5м",
        "category": "hardware",
        "price": 299,
        "description": "Сітка рабиця шириною 1.5 метри для огородження території або будівельних робіт.",
        "features": {
            "Ширина": "1.5 м",
            "Матеріал": "Метал",
            "Призначення": "Огородження, будівельні роботи",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://rebud.com.ua/image/cache/catalog/tovari/parkan/s%D1%96tka/rabicya/setka-rabica1-700x700.jpeg",
            "https://rebud.com.ua/image/cache/catalog/tovari/parkan/s%D1%96tka/rabicya/setka-rabica1-700x700.jpeg",
            "https://rebud.com.ua/image/cache/catalog/tovari/parkan/s%D1%96tka/rabicya/setka-rabica1-700x700.jpeg",
        ]
    },
    {
        "id": 60,
        "name": "Профнастил 0.5мм",
        "category": "hardware",
        "price": 349,
        "description": "Металевий профнастил товщиною 0.5мм для обшивки стін або покрівельних робіт.",
        "features": {
            "Товщина": "0.5 мм",
            "Матеріал": "Метал",
            "Призначення": "Покрівельні роботи, обшивка стін",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://budtraffic.net/image/cache/catalog/galery1/profnastil/t45-7024-300x300.jpg",
            "https://budtraffic.net/image/cache/catalog/galery1/profnastil/t45-7024-300x300.jpg",
            "https://budtraffic.net/image/cache/catalog/galery1/profnastil/t45-7024-300x300.jpg",
        ]
    },

    // Дерево та пиломатеріали (20)
    {
        "id": 61,
        "name": "Дошка обрізна 25x150x6000мм",
        "category": "lumber",
        "price": 199,
        "description": "Обрізна дошка для будівельних і оздоблювальних робіт, розміром 25x150x6000мм.",
        "features": {
            "Розмір": "25x150x6000 мм",
            "Матеріал": "Дерево (сосна)",
            "Призначення": "Будівництво, оздоблення",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://kievstroy.org/data/medium/2980_2975_images_70828.jpg",
            "https://kievstroy.org/data/medium/2980_2975_images_70828.jpg",
            "https://kievstroy.org/data/medium/2980_2975_images_70828.jpg",
        ]
    },
    {
        "id": 62,
        "name": "Брус 50x50x3000мм",
        "category": "lumber",
        "price": 89,
        "description": "Дерев'яний брус розміром 50x50x3000мм для конструкцій та оздоблення.",
        "features": {
            "Розмір": "50x50x3000 мм",
            "Матеріал": "Дерево (сосна)",
            "Призначення": "Конструкції, оздоблення",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://g-stroy.biz.ua/wp-content/uploads/2021/07/brus-strogannyy-500x500-1.jpg",
            "https://g-stroy.biz.ua/wp-content/uploads/2021/07/brus-strogannyy-500x500-1.jpg",
            "https://g-stroy.biz.ua/wp-content/uploads/2021/07/brus-strogannyy-500x500-1.jpg",
        ]
    },
    {
        "id": 63,
        "name": "Фанера 18мм 1.5x1.5м",
        "category": "lumber",
        "price": 899,
        "description": "Міцна фанера товщиною 18мм, розміром 1.5x1.5м для оздоблення або меблевих робіт.",
        "features": {
            "Товщина": "18 мм",
            "Розмір": "1.5x1.5 м",
            "Матеріал": "Фанера",
            "Призначення": "Оздоблення, меблі",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://stroykan.com.ua/image/cache/catalog/tovar/Fanera/1-501x501.png",
            "https://stroykan.com.ua/image/cache/catalog/tovar/Fanera/1-501x501.png",
            "https://stroykan.com.ua/image/cache/catalog/tovar/Fanera/1-501x501.png",
        ]
    },
    {
        "id": 64,
        "name": "OSB плита 9мм",
        "category": "lumber",
        "price": 649,
        "description": "OSB плита товщиною 9мм для конструкцій, обшивки або підлоги.",
        "features": {
            "Товщина": "9 мм",
            "Матеріал": "OSB",
            "Призначення": "Конструкції, обшивка, підлога",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://novatorstroy.com/wa-data/public/shop/products/92/86/118692/images/5204/5204.742x0@2x.jpg",
            "https://novatorstroy.com/wa-data/public/shop/products/92/86/118692/images/5204/5204.742x0@2x.jpg",
            "https://novatorstroy.com/wa-data/public/shop/products/92/86/118692/images/5204/5204.742x0@2x.jpg",
        ]
    },
    {
        "id": 65,
        "name": "ДВП лист 2.5x1.7м",
        "category": "lumber",
        "price": 299,
        "description": "ДВП лист розміром 2.5x1.7м для оздоблювальних робіт та меблевого виробництва.",
        "features": {
            "Розмір": "2.5x1.7 м",
            "Матеріал": "ДВП",
            "Призначення": "Оздоблення, меблі",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo7GRviKR8h9kgBJCvxG9B2nEZbgA0mHV1Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo7GRviKR8h9kgBJCvxG9B2nEZbgA0mHV1Q&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlo7GRviKR8h9kgBJCvxG9B2nEZbgA0mHV1Q&s",
        ]
    },
    {
        "id": 66,
        "name": "Вагонка соснова 12x96мм",
        "category": "lumber",
        "price": 129,
        "description": "Соснова вагонка розміром 12x96мм для оздоблення стін або стель.",
        "features": {
            "Розмір": "12x96 мм",
            "Матеріал": "Дерево (сосна)",
            "Призначення": "Оздоблення стін, стель",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://koster.net.ua/image/cache/catalog/doska/vagonka/vagonkasosnovaja_1-800x800.jpg",
            "https://koster.net.ua/image/cache/catalog/doska/vagonka/vagonkasosnovaja_1-800x800.jpg",
            "https://koster.net.ua/image/cache/catalog/doska/vagonka/vagonkasosnovaja_1-800x800.jpg",
        ]
    },
    {
        "id": 67,
        "name": "Паркетна дошка дуб",
        "category": "lumber",
        "price": 1499,
        "description": "Дубова паркетна дошка високої якості для покриття підлоги.",
        "features": {
            "Матеріал": "Дуб",
            "Товщина": "15 мм",
            "Тип": "Паркетна дошка",
            "Призначення": "Покриття підлоги",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://arbofari.ua/wp-content/uploads/2023/10/%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BD%D0%B0-%D0%B4%D0%BE%D1%88%D0%BA%D0%B0-%D0%B4%D1%83%D0%B1-%D0%90%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D1%8F%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0-Arbofari-Pure-Naturale.jpg",
            "https://arbofari.ua/wp-content/uploads/2023/10/%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BD%D0%B0-%D0%B4%D0%BE%D1%88%D0%BA%D0%B0-%D0%B4%D1%83%D0%B1-%D0%90%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D1%8F%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0-Arbofari-Pure-Naturale.jpg",
            "https://arbofari.ua/wp-content/uploads/2023/10/%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BD%D0%B0-%D0%B4%D0%BE%D1%88%D0%BA%D0%B0-%D0%B4%D1%83%D0%B1-%D0%90%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D1%8F%D0%BB%D0%B8%D0%BD%D0%BA%D0%B0-Arbofari-Pure-Naturale.jpg",
        ]
    },
    {
        "id": 68,
        "name": "Плінтус дерев'яний 60мм",
        "category": "lumber",
        "price": 49,
        "description": "Дерев'яний плінтус висотою 60мм для оздоблення підлоги.",
        "features": {
            "Висота": "60 мм",
            "Матеріал": "Дерево",
            "Тип": "Плінтус",
            "Призначення": "Оздоблення підлоги",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://svitdereva.com.ua/files/resized/products/427950171_1071671260790088_8312888520942980887_n_1.1800x1800w.jpg",
            "https://svitdereva.com.ua/files/resized/products/427950171_1071671260790088_8312888520942980887_n_1.1800x1800w.jpg",
            "https://svitdereva.com.ua/files/resized/products/427950171_1071671260790088_8312888520942980887_n_1.1800x1800w.jpg",
        ]
    },
    {
        "id": 69,
        "name": "Ламінат 8мм (1 пачка)",
        "category": "lumber",
        "price": 799,
        "description": "Ламінат товщиною 8мм для укладання підлоги. Одна пачка покриває до 2 м².",
        "features": {
            "Товщина": "8 мм",
            "Площа покриття": "2 м²",
            "Тип": "Ламінат",
            "Призначення": "Покриття підлоги",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://images.prom.ua/4234557202_w600_h600_4234557202.jpg",
            "https://images.prom.ua/4234557202_w600_h600_4234557202.jpg",
            "https://images.prom.ua/4234557202_w600_h600_4234557202.jpg",
        ]
    },
    {
        "id": 70,
        "name": "Сходинка для сходів",
        "category": "lumber",
        "price": 199,
        "description": "Дерев'яна сходинка для будівництва сходів.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "100x30 см",
            "Тип": "Сходинка",
            "Призначення": "Будівництво сходів",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://dimpidlogy.com.ua/image/cache/catalog/%20%D0%B1%D1%83%D0%BA-2268x3000.jpg",
            "https://dimpidlogy.com.ua/image/cache/catalog/%20%D0%B1%D1%83%D0%BA-2268x3000.jpg",
            "https://dimpidlogy.com.ua/image/cache/catalog/%20%D0%B1%D1%83%D0%BA-2268x3000.jpg",
        ]
    },
    {
        "id": 71,
        "name": "Двері міжкімнатні",
        "category": "lumber",
        "price": 2499,
        "description": "Міжкімнатні двері з натурального дерева, сучасний дизайн.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "200x80 см",
            "Тип": "Міжкімнатні двері",
            "Призначення": "Для кімнат",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://doors.biz.ua/Media/shop-8353/%D0%9C%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D0%94%D0%B2%D0%B5%D1%80%D0%B8/Deco%20%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8/City/%D0%94%D0%B2%D0%B5%D1%80%D1%96%20%D0%9C%D1%96%D0%B6%D0%BA%D1%96%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%96%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2.%20%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C%20_%D0%A1%D1%96%D1%82%D1%96-1_%20%D1%81%D0%BA%D0%BB%D0%BE%20%D0%A7%D0%BE%D1%80%D0%BD%D0%B5.jpg",
            "https://doors.biz.ua/Media/shop-8353/%D0%9C%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D0%94%D0%B2%D0%B5%D1%80%D0%B8/Deco%20%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8/City/%D0%94%D0%B2%D0%B5%D1%80%D1%96%20%D0%9C%D1%96%D0%B6%D0%BA%D1%96%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%96%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2.%20%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C%20_%D0%A1%D1%96%D1%82%D1%96-1_%20%D1%81%D0%BA%D0%BB%D0%BE%20%D0%A7%D0%BE%D1%80%D0%BD%D0%B5.jpg",
            "https://doors.biz.ua/Media/shop-8353/%D0%9C%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5%20%D0%94%D0%B2%D0%B5%D1%80%D0%B8/Deco%20%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8/City/%D0%94%D0%B2%D0%B5%D1%80%D1%96%20%D0%9C%D1%96%D0%B6%D0%BA%D1%96%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%96%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2.%20%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C%20_%D0%A1%D1%96%D1%82%D1%96-1_%20%D1%81%D0%BA%D0%BB%D0%BE%20%D0%A7%D0%BE%D1%80%D0%BD%D0%B5.jpg",
        ]
    },
    {
        "id": 72,
        "name": "Підвіконня ПВХ 150мм",
        "category": "lumber",
        "price": 399,
        "description": "ПВХ підвіконня шириною 150мм для віконних прорізів.",
        "features": {
            "Матеріал": "ПВХ",
            "Ширина": "150 мм",
            "Тип": "Підвіконня",
            "Призначення": "Встановлення на вікна",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://www.budmagazin.com.ua/image/cache/catalog/tovary/OknaDveri/ganz/podokonnik-ganz-10-1000x1000.jpg",
            "https://www.budmagazin.com.ua/image/cache/catalog/tovary/OknaDveri/ganz/podokonnik-ganz-10-1000x1000.jpg",
            "https://www.budmagazin.com.ua/image/cache/catalog/tovary/OknaDveri/ganz/podokonnik-ganz-10-1000x1000.jpg",
        ]
    },
    {
        "id": 73,
        "name": "Блок-хаус сосновий",
        "category": "lumber",
        "price": 199,
        "description": "Сосновий блок-хаус для облицювання стін або фасадів.",
        "features": {
            "Матеріал": "Сосна",
            "Розмір": "20x120 мм",
            "Тип": "Блок-хаус",
            "Призначення": "Облицювання стін, фасадів",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://cdn.27.ua/sc--media--prod/default/d5/02/07/d502075c-e00c-443a-b44b-a0aff05d9326.jpg",
            "https://cdn.27.ua/sc--media--prod/default/d5/02/07/d502075c-e00c-443a-b44b-a0aff05d9326.jpg",
            "https://cdn.27.ua/sc--media--prod/default/d5/02/07/d502075c-e00c-443a-b44b-a0aff05d9326.jpg",
        ]
    },
    {
        "id": 74,
        "name": "Рейка обрізна 20x40мм",
        "category": "lumber",
        "price": 29,
        "description": "Обрізна рейка з натурального дерева для будівельних та оздоблювальних робіт.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "20x40 мм",
            "Тип": "Обрізна рейка",
            "Призначення": "Будівництво, оздоблення",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://ukrlis.dp.ua/image/cache/catalog/%D1%80%D0%B5%D0%B9%D0%BA%D0%B0/20-40-860x860.jpg",
            "https://ukrlis.dp.ua/image/cache/catalog/%D1%80%D0%B5%D0%B9%D0%BA%D0%B0/20-40-860x860.jpg",
            "https://ukrlis.dp.ua/image/cache/catalog/%D1%80%D0%B5%D0%B9%D0%BA%D0%B0/20-40-860x860.jpg",
        ]
    },
    {
        "id": 75,
        "name": "Деревина для копчення",
        "category": "lumber",
        "price": 149,
        "description": "Деревина спеціально підготовлена для копчення продуктів харчування.",
        "features": {
            "Матеріал": "Дерево (вільха, дуб, фруктові породи)",
            "Вага": "10 кг",
            "Тип": "Деревина для копчення",
            "Призначення": "Копчення продуктів",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://pim.mamed.com.ua:8443/ec/images/229-shepa_2.webp",
            "https://pim.mamed.com.ua:8443/ec/images/229-shepa_2.webp",
            "https://pim.mamed.com.ua:8443/ec/images/229-shepa_2.webp",
        ]
    },
    {
        "id": 76,
        "name": "Піддони європалети",
        "category": "lumber",
        "price": 199,
        "description": "Дерев'яні піддони стандарту європалети для транспортування товарів.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "1200x800 мм",
            "Тип": "Європалета",
            "Призначення": "Транспортування, зберігання",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://agrovektor.com/uploads/gallery/32898/product/997264-0.jpg",
            "https://agrovektor.com/uploads/gallery/32898/product/997264-0.jpg",
            "https://agrovektor.com/uploads/gallery/32898/product/997264-0.jpg",
        ]
    },
    {
        "id": 77,
        "name": "Дошка для лавки",
        "category": "lumber",
        "price": 349,
        "description": "Дошка для виготовлення або ремонту лавок.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "120x30 см",
            "Тип": "Дошка",
            "Призначення": "Для лавок",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://ua.ws-platiclumber.com/uploads/201919929/small/structured-reinforced-plastic-lumber34089137182.jpg",
            "https://ua.ws-platiclumber.com/uploads/201919929/small/structured-reinforced-plastic-lumber34089137182.jpg",
            "https://ua.ws-platiclumber.com/uploads/201919929/small/structured-reinforced-plastic-lumber34089137182.jpg",
        ]
    },
    {
        "id": 78,
        "name": "Дерев'яні кубики для дитячої",
        "category": "lumber",
        "price": 99,
        "description": "Дерев'яні кубики для дитячих ігор та розвиваючих занять.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "40x40 мм (1 кубик)",
            "Тип": "Іграшки",
            "Призначення": "Для дітей",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://goydalka.com/wp-content/plugins/ns-woocommerce-watermark//ns_image.php?param=aW1hZ2VfcGF0aD1odHRwczovL2dveWRhbGthLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNy8xMUMyMTAtMV8wMS1zY2FsZWQuanBnJnd0X3BhdGg9aHR0cHM6Ly9nb3lkYWxrYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDcvd2F0ZXJtYXJrNC5wbmcmb3RoZXI9bm9uZQ==",
            "https://goydalka.com/wp-content/plugins/ns-woocommerce-watermark//ns_image.php?param=aW1hZ2VfcGF0aD1odHRwczovL2dveWRhbGthLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNy8xMUMyMTAtMV8wMS1zY2FsZWQuanBnJnd0X3BhdGg9aHR0cHM6Ly9nb3lkYWxrYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDcvd2F0ZXJtYXJrNC5wbmcmb3RoZXI9bm9uZQ==",
            "https://goydalka.com/wp-content/plugins/ns-woocommerce-watermark//ns_image.php?param=aW1hZ2VfcGF0aD1odHRwczovL2dveWRhbGthLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNy8xMUMyMTAtMV8wMS1zY2FsZWQuanBnJnd0X3BhdGg9aHR0cHM6Ly9nb3lkYWxrYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDcvd2F0ZXJtYXJrNC5wbmcmb3RoZXI9bm9uZQ==",
        ]
    },
    {
        "id": 79,
        "name": "Дерев'яна ваза",
        "category": "lumber",
        "price": 499,
        "description": "Елегантна дерев'яна ваза для декору інтер'єру.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "30x10 см",
            "Тип": "Декор",
            "Призначення": "Інтер'єр",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeBMjTeStOFPG0dcbZ-eDdpsBRdWvfpsyHg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeBMjTeStOFPG0dcbZ-eDdpsBRdWvfpsyHg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeBMjTeStOFPG0dcbZ-eDdpsBRdWvfpsyHg&s",
        ]
    },
    {
        "id": 80,
        "name": "Стовп для паркану",
        "category": "lumber",
        "price": 199,
        "description": "Дерев'яний стовп для встановлення парканів.",
        "features": {
            "Матеріал": "Дерево",
            "Розмір": "150x150 мм",
            "Тип": "Стовп",
            "Призначення": "Для паркану",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://metallosetka.dp.ua/wp-content/uploads/2020/12/stolby-5.jpg",
            "https://metallosetka.dp.ua/wp-content/uploads/2020/12/stolby-5.jpg",
            "https://metallosetka.dp.ua/wp-content/uploads/2020/12/stolby-5.jpg",
        ]
    },

    // Сантехніка (15)
    {
        "id": 81,
        "name": "Труба ПВХ 50мм (1м)",
        "category": "plumbing",
        "price": 89,
        "description": "Пластикова труба діаметром 50 мм для водопроводу та каналізації.",
        "features": {
            "Матеріал": "ПВХ",
            "Діаметр": "50 мм",
            "Довжина": "1 м",
            "Призначення": "Водопровід, каналізація",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aXdTg367a_x52iZrkEafpWhsXmzFjhzyWg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aXdTg367a_x52iZrkEafpWhsXmzFjhzyWg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-aXdTg367a_x52iZrkEafpWhsXmzFjhzyWg&s",
        ]
    },
    {
        "id": 82,
        "name": "Кран шаровий 1/2\"",
        "category": "plumbing",
        "price": 199,
        "description": "Металевий шаровий кран для труб діаметром 1/2\".",
        "features": {
            "Матеріал": "Латунь",
            "Тип": "Шаровий кран",
            "Розмір": "1/2\"",
            "Призначення": "Перекриття води",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://komandor2000.ua/image/cache/9fe5ff23c9c48f58327dc7332edc106b.png",
            "https://komandor2000.ua/image/cache/9fe5ff23c9c48f58327dc7332edc106b.png",
            "https://komandor2000.ua/image/cache/9fe5ff23c9c48f58327dc7332edc106b.png",
        ]
    },
    {
        "id": 83,
        "name": "Змішувач для умивальника",
        "category": "plumbing",
        "price": 899,
        "description": "Елегантний змішувач для умивальника з хромованим покриттям.",
        "features": {
            "Матеріал": "Латунь",
            "Покриття": "Хром",
            "Тип": "Змішувач",
            "Призначення": "Для умивальника",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJM1gI9EAhZGtVLVUDysNFJJaduZfAvZuag&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJM1gI9EAhZGtVLVUDysNFJJaduZfAvZuag&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJM1gI9EAhZGtVLVUDysNFJJaduZfAvZuag&s",
        ]
    },
    {
        "id": 84,
        "name": "Унітаз підвісний",
        "category": "plumbing",
        "price": 2499,
        "description": "Сучасний підвісний унітаз з гладкою поверхнею для легкого очищення.",
        "features": {
            "Матеріал": "Кераміка",
            "Тип": "Підвісний",
            "Додатково": "Антибактеріальне покриття",
            "Призначення": "Для ванної кімнати",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://images-shop.agromat.ua/24453401/0946125001693558191-600.jpg",
            "https://images-shop.agromat.ua/24453401/0946125001693558191-600.jpg",
            "https://images-shop.agromat.ua/24453401/0946125001693558191-600.jpg",
        ]
    },
    {
        "id": 85,
        "name": "Сифон для раковини",
        "category": "plumbing",
        "price": 149,
        "description": "Компактний сифон для раковини з системою запобігання засмічення.",
        "features": {
            "Матеріал": "Пластик",
            "Тип": "Сифон",
            "Призначення": "Для раковини",
            "Додатково": "Легкий монтаж",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwvrYoEP8c4fWkNZi_r2SaCvqBHDeq0VPcw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwvrYoEP8c4fWkNZi_r2SaCvqBHDeq0VPcw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwvrYoEP8c4fWkNZi_r2SaCvqBHDeq0VPcw&s",
        ]
    },
    {
        "id": 86,
        "name": "Гофра для каналізації",
        "category": "plumbing",
        "price": 129,
        "description": "Гофрована труба для підключення до каналізації.",
        "features": {
            "Матеріал": "Пластик",
            "Довжина": "1 м",
            "Тип": "Гофра",
            "Призначення": "Каналізація",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://aquavin.com.ua/media/images/store/productphoto/a4ab1893-8830-49cd-82ce-f58785bd4a90.webp",
            "https://aquavin.com.ua/media/images/store/productphoto/a4ab1893-8830-49cd-82ce-f58785bd4a90.webp",
            "https://aquavin.com.ua/media/images/store/productphoto/a4ab1893-8830-49cd-82ce-f58785bd4a90.webp",
        ]
    },
    {
        "id": 87,
        "name": "Фум-стрічка",
        "category": "plumbing",
        "price": 29,
        "description": "Фум-стрічка для герметизації різьбових з'єднань.",
        "features": {
            "Матеріал": "Фторопласт",
            "Довжина": "10 м",
            "Ширина": "12 мм",
            "Призначення": "Герметизація",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://valtec-kiev.com/image/cache/catalog/valtec/7/valtec-kiev-VT-PTFE-0_1-1000x1000.jpg",
            "https://valtec-kiev.com/image/cache/catalog/valtec/7/valtec-kiev-VT-PTFE-0_1-1000x1000.jpg",
            "https://valtec-kiev.com/image/cache/catalog/valtec/7/valtec-kiev-VT-PTFE-0_1-1000x1000.jpg",
        ]
    },
    {
        "id": 88,
        "name": "Фільтр для води",
        "category": "plumbing",
        "price": 399,
        "description": "Фільтр для очищення води з високою ефективністю.",
        "features": {
            "Тип": "Механічний",
            "Призначення": "Очищення води",
            "Продуктивність": "500 л/год",
            "Матеріал корпусу": "Пластик",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://images.prom.ua/402769205_filtr-dlya-vodi.jpg",
            "https://images.prom.ua/402769205_filtr-dlya-vodi.jpg",
            "https://images.prom.ua/402769205_filtr-dlya-vodi.jpg",
        ]
    },
    {
        "id": 89,
        "name": "Душова кабіна",
        "category": "plumbing",
        "price": 5999,
        "description": "Сучасна душова кабіна з дверцятами з загартованого скла.",
        "features": {
            "Матеріал скла": "Загартоване скло",
            "Тип": "Кутова",
            "Розміри": "90x90 см",
            "Призначення": "Для ванної кімнати",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://cdn.27.ua/sc--media--prod/default/dd/2f/89/dd2f8925-b215-480e-ad93-f00f5620bf20.jpg",
            "https://cdn.27.ua/sc--media--prod/default/dd/2f/89/dd2f8925-b215-480e-ad93-f00f5620bf20.jpg",
            "https://cdn.27.ua/sc--media--prod/default/dd/2f/89/dd2f8925-b215-480e-ad93-f00f5620bf20.jpg",
        ]
    },
    {
        "id": 90,
        "name": "Радіатор алюмінієвий",
        "category": "plumbing",
        "price": 1999,
        "description": "Алюмінієвий радіатор для ефективного опалення.",
        "features": {
            "Матеріал": "Алюміній",
            "Кількість секцій": "10",
            "Робочий тиск": "16 атм",
            "Призначення": "Опалення",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQuDcd5kg6HSXER_fdDZX_F38K3FLlXA_zw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQuDcd5kg6HSXER_fdDZX_F38K3FLlXA_zw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQuDcd5kg6HSXER_fdDZX_F38K3FLlXA_zw&s",
        ]
    },
    {
        "id": 91,
        "name": "Трубний ключ",
        "category": "plumbing",
        "price": 249,
        "description": "Міцний трубний ключ для роботи з трубами різного діаметра.",
        "features": {
            "Матеріал": "Сталь",
            "Розмір": "12\"",
            "Призначення": "Монтаж труб",
            "Особливості": "Прогумовані ручки",
            "Країна виробник": "Україна"
        },
        "images": [
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_49-335.jpg",
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_49-335.jpg",
            "https://vist.market/storage/uploads/thumbs/store/subproduct/453x453_49-335.jpg",
        ]
    },
    { id: 92, name: "Гідроаккумулятор 50л", category: "plumbing", price: 2499 },
    { id: 93, name: "Насос циркуляційний", category: "plumbing", price: 1299 },
    { id: 94, name: "Колектор для теплої підлоги", category: "plumbing", price: 899 },
    { id: 95, name: "Редуктор тиску води", category: "plumbing", price: 599 },

    // Електрика (15)
    { id: 96, name: "Кабель ВВГ 3x2.5 (1м)", category: "electrical", price: 45 },
    { id: 97, name: "Розетка євро", category: "electrical", price: 89 },
    { id: 98, name: "Вимикач одноклавишний", category: "electrical", price: 69 },
    { id: 99, name: "Автомат 16А", category: "electrical", price: 129 },
    { id: 100, name: "Лампа LED 10W", category: "electrical", price: 99 },
    { id: 101, name: "Димовий датчик", category: "electrical", price: 299 },
    { id: 102, name: "Терморегулятор", category: "electrical", price: 499 },
    { id: 103, name: "Патрон для лампочки", category: "electrical", price: 49 },
    { id: 104, name: "Провід ПВС 2x1.5", category: "electrical", price: 25 },
    { id: 105, name: "Розподільна коробка", category: "electrical", price: 39 },
    { id: 106, name: "Стабілізатор напруги", category: "electrical", price: 1999 },
    { id: 107, name: "Генератор 5кВт", category: "electrical", price: 14999 },
    { id: 108, name: "Сонячна панель 300W", category: "electrical", price: 5999 },
    { id: 109, name: "ІБП для котла", category: "electrical", price: 3499 },
    { id: 110, name: "Таймер розетковий", category: "electrical", price: 199 }
];