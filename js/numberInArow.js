// Устанавлюем большые или малинкие карточкы товара

// при клики меняет количество товара в ряду
buttonNumberRow.onclick = function() {
    //скрываем меню у кнопок (Пол, Сезон, Бренд и По-рейтингу)
    buttonId.forEach(item => {
        item.parentNode.classList.remove('accordion-item--active');
    });
    
    //очещаем HTML
    conteinerCards.innerHTML = '';
    // если дата атрибут равно 'big' 
    if(document.documentElement.dataset.cardSize === 'big') {
        //устанавлюваем на HTML странице data-card-size="small"
        document.documentElement.dataset.cardSize = 'small';
        buttonNumberTwoRow.classList.add('one-row-small');
        buttonNumberOneRow.classList.remove('one-row-big');
        //устанавлюваем индекс з которого будим рендерить ноль
        productsPerPage = 0;
         //ренндерим 
       // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
       if(filterProduct) {
            render(filterProduct);
       } else {
            // если нету то рендерим масив (Product) з всем товаром
            render(Product)
       }
       return;
    }

    if(document.documentElement.dataset.cardSize === 'small') {
        document.documentElement.dataset.cardSize = 'big';
        buttonNumberTwoRow.classList.remove('one-row-small');
        buttonNumberOneRow.classList.add('one-row-big');
        //устанавлюваем индекс з которого будим рендерить ноль
        productsPerPage = 0;
        //ренндерим 
       // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
       if(filterProduct) {
            render(filterProduct);
        } else {
            // если нету то рендерим масив (Product) з всем товаром
            render(Product)
        }
        return;
    }
}

