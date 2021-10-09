// Фильтруем товар по категориям

//масивы товаров по Полу
let male = [];
let women = [];
let children = [];

// массивы товара по брендам 
let arrAdidas = [];
let arrChampion = [];
let arrNewbalance = [];
let arrNike = [];
let arrPuma = [];
let arrHellyHansen = [];

// массивы товара по порам року
let SpringSummer = [];
let Summer = [];
let AutumnWinter = [];
let Winter = [];

// функция обнуляет содержымое всех массивов (з Полом)
function zeroesArraysPol() {
    male = [];
    women = [];
    children = [];
}

// функция обнуляет содержымое всех массивов (з брендами и)
function zeroesArraysBrands() {
arrAdidas = [];
arrChampion = [];
arrNewbalance = [];
arrNike = [];
arrPuma = [];
arrHellyHansen = [];
}
// функция обнуляет содержымое всех массивов (з сезонамы)
function zeroesArraysSeasons() {
    SpringSummer = [];
    Summer = [];
    AutumnWinter = [];
    Winter = [];
}

// Функция будет рендерить переданный массв 
function renderFilter() {
    //очещаем HTML
   conteinerCards.innerHTML = '';
   //устанавлюваем индекс з которого будим рендерить ноль
   productsPerPage = 0;
   //ренндерим 
   render(filterProduct);
}

// *******************************************************
// сортируем товар по Полу (для Мужчин, Женщин и Детей) в разные массивы
// вставляем количество товара возле пола (Мужчинам(6), Женщинам(6), Детям(6))
function sortByPol(arr) {
    // сортируем товар (Мужчинам, Женщинам, Детям) в разные массивы
    arr.forEach(product => {
        if(product.categoryId === 'male') {
            male.push(product);
        }
        if(product.categoryId === 'women') {
            women.push(product);
        }
        if(product.categoryId === 'children') {
            children.push(product);
        }
    });

    // вставляем количество товара биля пола (Мужчинам(6), Женщинам(6), Детям(6))
    buttonYouId.forEach(button => {
        button.classList.remove('inactive');

        if(button.textContent.match('Мужчинам')) {
            button.lastElementChild.textContent = `(${male.length})`;
        }
        if(button.textContent.match('Женщинам')) {
            button.lastElementChild.textContent = `(${women.length})`;
        }
        if(button.textContent.match('Детям')) {
            button.lastElementChild.textContent = `(${children.length})`;
        }
        // скрываем инпут если в ньм нет товаров
        if(button.lastElementChild.textContent === '(0)') {
            button.classList.add('inactive');
        }
    });
}
// запускаем функцию "sortPolArr" и передаем ей масив "Product"
sortByPol(Product);
/////////////////////////////////////////////////////////

// *******************************************************
// сортируем товар по сезонам (Весна-Лето, Лето, Осень-Зима, Зима) в разные массивы
// вставляем количество товара возле сезона (Весна-Лето, Лето, Осень-Зима, Зима)
function sortBySeason(arr) {
    // сортируем товар по сезонам (Весна-Лето, Лето, Осень-Зима, Зима) в разные массивы
    arr.forEach(product => {
        if(product.season === 'Spring-Summer') {
            SpringSummer.push(product);
        }
        if(product.season === 'Summer') {
            Summer.push(product);
        }
        if(product.season === 'Autumn-Winter') {
            AutumnWinter.push(product);
        }
        if(product.season === 'Winter') {
            Winter.push(product);
        }
    });

    // вставляем количество товара возле сезона (Весна-Лето, Лето, Осень-Зима, Зима)
    inputSeason.forEach(input => {
        // показуем инпут если он был скрыт
        input.parentNode.style.display = 'flex';

        if(input.value === 'Spring-Summer') {
            input.parentNode.lastElementChild.textContent = `(${SpringSummer.length})`;
        }
        if(input.value === 'Summer') {
            input.parentNode.lastElementChild.textContent = `(${Summer.length})`;
        }
        if(input.value === 'Autumn-Winter') {
            input.parentNode.lastElementChild.textContent = `(${AutumnWinter.length})`;
        }
        if(input.value === 'Winter') {
            input.parentNode.lastElementChild.textContent = `(${Winter.length})`;
        }

        // скрываем инпут если в ньм нет товаров
        if(input.parentNode.lastElementChild.textContent === '(0)') {
            input.parentNode.style.display = 'none';
        }
    });

}
// запускаем функцию "sortSeasonArr" и передаем ей масив "Product"
sortBySeason(Product);
/////////////////////////////////////////////////////////

// *******************************************************
//разбивает переданый массив (arr) з товарами по брендам в разные массивы
// вставляем количество товара возле каждого бренда
function sortByBrand(arr) {
    // проходим цыклом по массиву "arr"
    arr.forEach(product => {
        // если в массиве есть бренд 'Adidas'
        if(product.brand === 'Adidas') {
            // то додаем етот товар в масив "arrAdidas"
            arrAdidas.push(product);
        }
        if(product.brand === 'Champion') {
            arrChampion.push(product);
        }
        if(product.brand === 'New Balance') {
            arrNewbalance.push(product);
        }
        if(product.brand === 'Nike') {
            arrNike.push(product);
        }
        if(product.brand === 'Puma') {
            arrPuma.push(product);
        }
        if(product.brand === 'Helly hansen') {
            arrHellyHansen.push(product);
        }
    });

    // вставляем количество товара возле бренда (Adidas, Champion, New-Balance, Nike, Puma, Helly-hansen)
    inputBrands.forEach(input => {
        // показуем инпут если он был скрыт
        input.parentNode.style.display = 'flex';
        
        if(input.value === 'Adidas') {
            input.parentNode.lastElementChild.textContent = `(${arrAdidas.length})`;
        }
        if(input.value === 'Champion') {
            input.parentNode.lastElementChild.textContent = `(${arrChampion.length})`;
        }
        if(input.value === 'New Balance') {
            input.parentNode.lastElementChild.textContent = `(${arrNewbalance.length})`;
        }
        if(input.value === 'Nike') {
            input.parentNode.lastElementChild.textContent = `(${arrNike.length})`;
        }
        if(input.value === 'Puma') {
            input.parentNode.lastElementChild.textContent = `(${arrPuma.length})`;
        }
        if(input.value === 'Helly hansen') {
            input.parentNode.lastElementChild.textContent = `(${arrHellyHansen.length})`;
        }

        // скрываем инпут если в ньм нет товаров
        if(input.parentNode.lastElementChild.textContent === '(0)') {
            input.parentNode.style.display = 'none';
        }
    });
}
// запускаем функцию "sortByBrand" и передаем ей масив "Product"
sortByBrand(Product);
/////////////////////////////////////////////////////////


// **********************************************************************************
// выводим количество отфильтрованого товара на кнопке "Отфильтрувать" и возле текста "Вы выбрали:"
function LengthFilter(arrProduct) {
    // выщитуем когда писать на кнопке (товар, товара, товаров).
    // в переменною arrProductLength записываем остаток от деления (длины масива arrProduct ) на 100 
    let arrProductLength =  arrProduct.length % 100;
    // в переменною arrProductLengthRemainder записываем остаток от деления (длины масива arrProduct ) на 10
    let arrProductLengthRemainder = arrProduct.length % 10;
    // переменная в которою будем ложить одно из значений (товар, товара, товаров.)
    let emphasis;
    // делаем проверку
    if(arrProductLength >= 5 && arrProductLength <= 20) {
        emphasis = 'товаров';
    } else if(arrProductLengthRemainder === 1) {
        emphasis = 'товар';
    } else if(arrProductLengthRemainder >= 2 && arrProductLengthRemainder <= 4) {
        emphasis = 'товара';
    } else {
        emphasis = 'товаров';
    }

    // выводит количество товара на кнопке отфильтровать
    buttonFilteredSpan.textContent = `${arrProduct.length} ${emphasis}`;
    
    // выводит количество товара возле текста "Вы выбрали:""
    youChoosed.lastElementChild.textContent = (`(${arrProduct.length} ${emphasis})`);
    // выводит количество товара возле текста "Обувь""
    // footwearText.lastElementChild.textContent = (`(${arrProduct.length} ${emphasis})`);
    
}
//Запускаем функцию LengthFilter в которою передаем аргумент масив з товаром "Product"
LengthFilter(Product);
// console.log(youChoosed);
/////////////////////////////////////////////////////////////////////////////////////


// ********************************* Меню фильтра Пол *************************************************
// проходим цыклом по кнопкам (Мужчинам, Женщинам, Детям)
buttonYouId.forEach(button => {
        // При клики по кнопкам (Мужчинам, Женщинам и Детям)
        button.onclick = function() {
        // у всех кнопок (Мужчинам, Женщинам и Детям) удаляем активный цвет текста (убераем класс "activeButton")
        buttonYouId.forEach(button => {
            button.classList.remove("activeButton");
        });
        // меняем цвет текста етой кнопки на активний
        button.classList.add("activeButton");
        // запускаем функцию clickButtonPol и передаем аргумент button
        clickButtonPol(button);
    }
});
// у Вы выбрали: устанавлюваем выбор переданного пола и Скрываем меню Пол
function YouChoosedPol(Pol, name) {
     // если повторно нажымаем по кнопке Мужчинам то выходем
     if(footwearText.previousElementSibling.textContent === Pol) {
        return
    }
    // у подменю Вы выбрали: устанавлюваем выбор переданного пола
    // проверяем если уже был какаойто выбор Пола то меняем только текст
    if (footwearText.previousElementSibling.textContent === 'Женская' || footwearText.previousElementSibling.textContent === 'Детская' || footwearText.previousElementSibling.textContent === 'Мужская') {
        footwearText.previousElementSibling.textContent = Pol;
        footwearText.previousElementSibling.name = name;
    } else {
        // если выбора нету то устанавливаем вибор пол
        footwearText.insertAdjacentHTML('beforebegin', `<button type="button" class="choice choicePol" id="maleWomenChildren" name="${name}">${Pol}</button>`);
    }
    //Скрываем меню Пол
    buttonId.forEach(item => {
        item.parentNode.classList.remove('accordion-item--active');
    });
}
  
// (у Вы выбрали:) При клики Удаляем Пол и в меню Пол убераем активнный цвет пола
function removePol() {
    // находим текст (Мужская, Женская, Детская) (у списке Вы выбрали:)
    const maleWomenChildren = document.querySelector('#maleWomenChildren');
    // устанавливаем события клик
    maleWomenChildren.onclick = function() {
        // удаляем пол (у списке Вы выбрали:)
        maleWomenChildren.remove();
        // у всех кнопок (Мужчинам, Женщинам або Детям) удаляем активный цвет текста (убераем класс "activeButton")
        buttonYouId.forEach(button => {
            button.classList.remove("activeButton");
        });

        // функция котороя фильтрует товар
        dfgdfgdgf();
        
    }
}

// Провераем по какой кнопке (Мужчинам, Женщинам або Детям) кликнули и запускаем функции
function clickButtonPol(button) {
    // если кликнули по кнопке 'Мужчинам' 
    if(button.textContent.match('Мужчинам')) {
        // у Вы выбрали: устанавлюваем текст 'Мужская'
        YouChoosedPol('Мужская', 'male');
        //При клики по тексту 'Мужская' (у Вы выбрали:) удаляем его
        removePol();
        
        // функция котороя фильтрует товар
        dfgdfgdgf();
    }
    // если кликнули по кнопке 'Женщинам' 
    if(button.textContent.match('Женщинам')) {
        // у Вы выбрали: устанавлюваем текст 'Женская'
        YouChoosedPol('Женская', 'Women');
        //При клики по тексту 'Женская' (у Вы выбрали:) удаляем его
        removePol();
        
        // функция котороя фильтрует товар
        dfgdfgdgf();
    }
    // если кликнули по кнопке 'Детям' 
    if(button.textContent.match('Детям')) {
        // у Вы выбрали: устанавлюваем текст 'Детская'
        YouChoosedPol('Детская', 'Children');
        //При клики по тексту 'Детская' (у Вы выбрали:) удаляем его
        removePol();
        
        // функция котороя фильтрует товар
        dfgdfgdgf();
    }
}
///////////////////////////////////////////// Меню фильтра Пол ////////////////////////////////////////////////////////////


// ********************************* Меню фильтра Сезон *******************************************************************
// Для каждого инпута запускаем функцию пры кликки по нему
inputSeason.forEach(input => {
    //пры клики по инпути запускаем функцию
    input.onclick = function() {
        // если пры клики чекается (активнный)
        if(input.checked) {
            // Находим текст сезона по которому кликнули
            const season = input.parentNode.lastElementChild.previousElementSibling.textContent;
            // (у  Вы выбрали:) добавляем текст етого сезона по которуму кликнули 
            Parameters.lastElementChild.insertAdjacentHTML('afterend', `<button type="button" class="choice choiceSeason choiceSeasonId" id="choiceSeason${input.value}" name="${input.value}">${season}</button>`);

            // функция котороя фильтрует товар
            dfgdfgdgf(); 

            // (у Вы выбрали:) Находим текст етого сезона
            const choiceSeason = document.querySelector(`#choiceSeason${input.value}`);
            // Запускаем функцыю пры клику по тексту етого сезона (у Вы выбрали:)
            choiceSeason.onclick = function() {
                // Удаляем текст етого сезона (у Вы выбрали:)
                choiceSeason.remove();
                // Убераем чеккед у етого сезона
                input.checked = false;

                // функция котороя фильтрует товар
                dfgdfgdgf();
            }

        } else {
            //если убераем чеккед пры клики (не активнный)

            // (у Вы выбрали:) Находим текст етого сезона
            const choiceSeason = document.querySelector(`#choiceSeason${input.value}`);
            // Удаляем текст етого сезона (у Вы выбрали:)
            choiceSeason.remove();

            // функция котороя фильтрует товар
            dfgdfgdgf();
        }
    }
});
//////////////////////////////////// Меню фильтра Сезон ///////////////////////////////////////////////////////////////////


// ********************************* Меню фильтра Бренд *******************************************************************
// для всех чекбоксов з брендами
inputBrands.forEach(input => {
    // выполняем функцию при клики
    input.onclick = function() {
        // убераем все пробели в input.value (имя бренда) если состоит из двух слов
        const inputValue = input.value.replace(/\s+/g, '');
        // если инпут зачекан
        if(input.checked) {
            // Находим текст (зачеконного) бренда по которому кликнули
            const brand = input.parentNode.lastElementChild.previousElementSibling.textContent;
            
            // (у  Вы выбрали:) добавляем текст етого бренда по которуму кликнули 
            footwearText.insertAdjacentHTML('afterend', `<button type="button" class="choice choiceBrand choiceBrandId" id="choiceBrand${inputValue}" name="${input.value}">${brand}</button>`);

            dfgdfgdgf();
            
            // (у Вы выбрали:) Находим текст етого бренда
            const choiceBrand = document.querySelector(`#choiceBrand${inputValue}`);
            // Запускаем функцыю пры клику по тексту етого бренда (у Вы выбрали:)
            choiceBrand.onclick = function() {
                // Удаляем текст етого бренда (у Вы выбрали:)
                choiceBrand.remove();
                // Убераем чеккед у етого бренда
                input.checked = false;

                dfgdfgdgf();
            }
        } else {
            //если убераем чеккед пры клики (не активнный)

            // (у Вы выбрали:) Находим текст етого бренда
            const choiceBrand = document.querySelector(`#choiceBrand${inputValue}`);
            // Удаляем текст етого бренда (у Вы выбрали:)
            choiceBrand.remove();

            dfgdfgdgf();
        }
    }
})
//////////////////////////////////// Меню фильтра Бренд ///////////////////////////////////////////////////////////////////


function dfgdfgdgf() {
    ProductF = Product.slice();

    // массив для выбранного Пола
    let productPol = [];
    // массив для выбранного Сезона
    let productSeason = [];
    // массив для выбранного Бренда
    let productBrand = [];

    // все выбраные сезоны
    let ProductFproductSeason = [];
    // все выбраные бренды
    let ProductFproductBrand = [];
    // все выбранные бренды пола
    let productPolProductBrand = [];

// -------------------------- +Пол --------------------------------------------
    // находим выбранный Пол
    let Pol = document.querySelector('#maleWomenChildren');

    // если есть выбор пола 
    if(Pol) {

        // если выбран пол мужская то из масива "Product" копируем мужскые товары в массив "productPol"
        if(Pol.name === 'male') {
            Product.forEach(product => {
                if(product.categoryId === 'male') {
                    productPol.push(product);
                }
            });
        }

        // если выбран пол хенская то из масива "Product" копируем женские товары в массив "productPol"
        if(Pol.name === 'Women') {
            Product.forEach(product => {
                if(product.categoryId === 'women') {
                    productPol.push(product);
                }
            });
        }
        // если выбран пол детская то из масива "Product" копируем детскые товары в массив "productPol"
        if(Pol.name === 'Children') {
            Product.forEach(product => {
                if(product.categoryId === 'children') {
                    productPol.push(product);
                }
            });
        } 
        // обнуляет массиви з полом
        zeroesArraysPol();
        // разбивает массив "ProductF" по Полу
        sortByPol(ProductF);

        // // обнуляет массиви з брендами
        zeroesArraysBrands();
        // разбивает массив "productPol" по брендам
        sortByBrand(productPol);

        // обнуляет массиви з сезонами
        zeroesArraysSeasons();
        // разбивает массив "Product" по сезонам
        sortBySeason(productPol)

    } else {
        // если нет выбора пол то 
        // productPol = ProductF;
        productPol = ProductF;

        // обнуляет массиви з полом
        zeroesArraysPol();
        // разбивает массив "ProductF" по Полу
        sortByPol(ProductF);

        // // обнуляет массиви з брендами
        zeroesArraysBrands();
        // разбивает массив "productPol" по брендам
        sortByBrand(productPol);

        // обнуляет массиви з сезонами
        zeroesArraysSeasons();
        // разбивает массив "Product" по сезонам
        sortBySeason(productPol)

    }

// ------------------------------------------------------------------------------

// -------------------------- +Сезон --------------------------------------------
    // находим выбранный Сезон
    let season = document.querySelectorAll('.choiceSeasonId');
    // проверяем если выбранный какойто сизон то
    if(season.length) {
        // каждый выбранный сезон
        season.forEach(nameSeason => {

            // ищем в массиве productPol
            productPol.forEach(product => {
                // если есть етот сызон 
                if(product.season === nameSeason.name) {
                    // то пушем его в массив productSeason
                    productSeason.push(product);
                }
            });

            ProductF.forEach(product => {
                // если есть етот сызон 
                if(product.season === nameSeason.name) {
                    // то пушем его в массив ProductFproductSeason
                    ProductFproductSeason.push(product);
                }
            });
        });

        // обнуляет массиви з полом
        zeroesArraysPol();
        // разбивает массив "ProductFproductSeason" по Полу
        sortByPol(ProductFproductSeason);

        // обнуляет массиви з брендами
        zeroesArraysBrands();
        // разбивает массив "productPol" по брендам
        sortByBrand(productSeason);

    } else {
        // если нет выброра по сезону
        productSeason = productPol;

        // обнуляет массиви з сезонами
        zeroesArraysSeasons();
        // разбивает массив "productPol" по сезонам
        sortBySeason(productPol);

    }

// -------------------------- +Бренд --------------------------------------------
    // находим выбранный Бренд
    let brand = document.querySelectorAll('.choiceBrandId');
    // проверяем если выбранный какойто бренд то
    if(brand.length) {
        // каждый выбранный бренд
        brand.forEach(nameBrand => {

            // ищем в массиве productSeason
            productSeason.forEach(product => {
                // если есть
                if(product.brand === nameBrand.textContent) {
                    // то пушем его в массив productBrand
                    productBrand.push(product);
                }
            });
// -----------------------------------------------------------------
            if(ProductFproductSeason.length) {
                // ищем бренд в массиве "ProductFproductSeason"
                ProductFproductSeason.forEach(product => {
                    // если есть такой бренд то 
                    if(product.brand === nameBrand.textContent) {
                        // пушым етот бренд в моссив "ProductFproductBrand"
                        ProductFproductBrand.push(product)
                    }
                });
            } else {
                // ищем бренд в массиве "ProductF"
                ProductF.forEach(product => {
                    // если есть такой бренд то 
                    if(product.brand === nameBrand.textContent) {
                        // пушым етот бренд в моссив "ProductFproductBrand"
                        ProductFproductBrand.push(product)
                    }
                });
            }
// ----------------------------------------------------------------------------
            if(productPol.length) {
                productPol.forEach(product => {
                    if(product.brand === nameBrand.textContent) {
                        productPolProductBrand.push(product);
                    }
                })
            }

        });   

        // обнуляет массиви з полом
        zeroesArraysPol();
        // разбивает массив "ProductFproductBrand" по Полу
        sortByPol(ProductFproductBrand);
        
        // обнуляет массиви з сезонами
        zeroesArraysSeasons();
        // разбивает массив "ProductFproductBrand" по сезонам
        sortBySeason(productPolProductBrand);

    } else {
        // если не выбран ни один бренд то
        productBrand = productSeason;  
    }
   // ----------------------------------------------------------------------

    filterProduct = productBrand;
    // выводим количество отфильтрованого товара на кнопке "Отфильтрувать" и возле текста "Вы выбрали:"
    LengthFilter(filterProduct);
    // рендерим 
    renderFilter();

}
