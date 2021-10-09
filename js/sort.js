// сортировка товара (по цене и рейтингу)

// Функция checkingValues запускает функцию сортировки в зависимости от значения списка сортировки
function checkingValues(button) {
    //у родителей кнопок (Пол, Сезон, Бренд и Сортировкы) удаляем класс 'accordion-item--active'
    buttonId.forEach(item => {
        item.parentNode.classList.remove('accordion-item--active');
    });

    if(button.textContent.match('Сначала дешевле')) {

        // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
       if(filterProduct) {
            sortByPrice(filterProduct);
        } else {
            // если нету то рендерим масив (Product) з всем товаром
            sortByPrice(Product)
        }
    }
    if(button.textContent.match('Сначала дороже')) {
        // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
       if(filterProduct) {
            sortByHigherPrice(filterProduct);
        } else {
            // если нету то рендерим масив (Product) з всем товаром
            sortByHigherPrice(Product)
        }
    }
    if(button.textContent.match('По рейтингу')) {
        // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
       if(filterProduct) {
            sortByRating(filterProduct);
        } else {
            // если нету то рендерим масив (Product) з всем товаром
            sortByRating(Product)
        }
    }
}

// Функция sortByPrice Сортирует товары по цене "Сначала дешевле"
function sortByPrice(arrey) {
    arrey.sort((a, b) => a.price - (a.price * (Math.abs(a.discount) / 100)) > b.price - (b.price * (Math.abs(b.discount) / 100)) ? 1 : -1);
    conteinerCards.innerHTML = '';
    productsPerPage = 0;
    //ренндерим 
    render(arrey);
}

// Функция sortByPrice Сортирует товары по цене "Сначала дороже"
function sortByHigherPrice(arrey) {
    arrey.sort((a, b) => a.price - (a.price * (Math.abs(a.discount) / 100)) < b.price - (b.price * (Math.abs(b.discount) / 100)) ? 1 : -1);
    conteinerCards.innerHTML = '';
    productsPerPage = 0;
    //ренндерим 
    render(arrey);
}
// Функция sortByRating Сортирует товары по рейтингу "Сначала з большым рейтингом"
function sortByRating(arrey) {
    arrey.sort((a, b) => a.rating < b.rating ? 1 : -1); // В масиве arrey Сортируем обекти от большого к меншому, по ключу "rating" в обекте (товаре)
    conteinerCards.innerHTML = '';
    productsPerPage = 0;
    //ренндерим 
    render(arrey);
}



// console.log(buttonSortId);
buttonSortId.forEach(button => {
    // при изминении значения списка сортировки запускаем функцию
    button.addEventListener('click', () => {
        checkingValues(button);
    }); 
})


