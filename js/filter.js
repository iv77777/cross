// Показуем скрываем меню фильтров

// скривает меню кнопок фильтров (checkbox-wrappe);
function removeClass() {
    //у родителей кнопок (Пол, Сезон, Бренд и Сортировкы) удаляем класс 'accordion-item--active'
    buttonId.forEach(item => {
        item.parentNode.classList.remove('accordion-item--active');
    });
}

// при клики по кнопке фильр показуем мобильное меню фильтров
buttonFilter.addEventListener('click', () => {
    // Добавляем класс контеинеру всей странице
    conteiner.classList.add('marginPaddingNoneId');
    // Добавляем класс контеинеру в котором лежат все фильтра
    filtersWrapper.classList.add('containerFilterParameters');
    //убераем у body скрол
    document.body.style.overflow = 'hidden';
    // скривает меню кнопок фильтров (checkbox-wrappe);
    removeClass();
});
// при клики по кнопке отфильтровано в меню фильтров 
buttonFiltered.addEventListener('click', () => {
    //Удаляем класс контеинеру всей странице
    conteiner.classList.remove('marginPaddingNoneId')
    // Удаляем класс контеинеру в котором лежат все фильтра
    filtersWrapper.classList.remove('containerFilterParameters');
    // добавляем body скрол по Y
    document.body.style.overflowY = 'scroll';
    // скривает меню кнопок фильтров (checkbox-wrappe);
    removeClass();
});

// при клики по кгопке (Пол, Сезон, Бренд и Сортировкы) розворачуем ету катигорию фильтра
buttonId.forEach(item => {
    // на каждую кнопку устанавливаем события клики (Пол, Сезон, Бренд и Сортировкы)
    item.addEventListener('click', () => {
        // если пры клики у родитиля есть класс 'accordion-item--active' то удаляем етот клас и выходим
        if(item.parentNode.classList.value.match('accordion-item--active')) {
            // удалям класс 'accordion-item--active' у родитиля етой кнопки 
            item.parentNode.classList.remove('accordion-item--active');
            return
        }
        // скривает меню кнопок фильтров (checkbox-wrappe);
        removeClass();
        //у кнопки по которой кликнули, добавляем  ее родитилю класс 'accordion-item--active' 
        item.parentNode.classList.add('accordion-item--active');
    });
});


// скрываем все меню фильтров если при изминении ширины екрана мы переходим з desktop на mobile версию сайта
// при изменении ширины окна браузера запускаем функцию "resize"
window.addEventListener('resize', resize);
function resize() {
    // получаем все стили кнопки "buttonFilter"
    const ddddd = getComputedStyle(buttonFilter);
    // если у кнопки display равно 'flex' то 
    if(ddddd.display === 'flex') {
        // скривает меню кнопок фильтров (checkbox-wrappe);
        removeClass();
    }
    
}
