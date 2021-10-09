//Формирует html карточок товара и вставляем на HTML страницу


// количество карточок в ряду
let cardsInRows = 1;
// Html карточок которые будут ити в ряд
let card = '';
// обертка каырточок одного ряду
let cardsWrapper = '';
//индекс з которого будим рендерить
let productsPerPage = 0;
// оберткы всех каырточок
let wrapperCards = '';

// ***********render()************************
function render(arrProduct) {
  // количество товара в ряду
  let goodsInRow;

  //если на HTML data-card-size="small" то рендери на один товар больше
  if(document.documentElement.dataset.cardSize === 'small') {
    goodsInRow = cardsInRows + 1;
  } else {
    goodsInRow = cardsInRows;
  }
  // Если в масиве arrProduct по индексу [productsPerPage] нет товара то выходим
  if(!arrProduct[productsPerPage]) {
    return
  }
  // очещаем card (предидущеи карточки)
  card = '';
  // очещаем cardsWrapper (предидущеи карточки)
  cardsWrapper = '';
  // перещитуем индекс до которого будем рендерить
  let step = productsPerPage + goodsInRow;

  if(step > arrProduct.length) {
    step = arrProduct.length;
  }
  // Для товаров от индекса "productsPerPage" и до индекса "step" виполняем код ниже
  for(i = productsPerPage; i < step; i++) {
    // html 
    let oldPrice;
    let newPrice;
    let discount;
    let saeson;
    let SeasonImg;
    //до текущого индекса додаем один 
    productsPerPage ++;
    if(arrProduct[i].season === 'Summer') {
      saeson = "Лето";
      SeasonImg = `<img class="imgSeason" src="img/SeasonImg/Season.png" alt="Лето">`;
    }
    if(arrProduct[i].season === 'Autumn-Winter') {
      saeson = "Осень-Зима";
    }
    if(arrProduct[i].season === 'Winter') {
      saeson = "Зима";
    }
    if(arrProduct[i].season === 'Spring-Summer') {
      saeson = "Весна-Лето";
    }
    //провераем если у товара есть скидка то формирем HTML 
    if(arrProduct[i].discount) {
      //Формируе html для старои цены 
      oldPrice = `<span class="old-price">${arrProduct[i].price} грн</span>`;
      //если есть скидка у товара, то от цены отнимаем ету скидку
      newPrice = arrProduct[i].price - (arrProduct[i].price * (Math.abs(arrProduct[i].discount) / 100));
      // Формируе html для отображения скидкы в левом верхним углу
      discount = `<span class="discount">${arrProduct[i].discount}%</span>`;
    } else {
      // Если у товара нет скидкы то удаляем HTML из переменных "discount" и "oldPrice"
      discount = '';
      oldPrice = '';
      newPrice = arrProduct[i].price;
    }
    // для каждого товара формируем HTML 
    card +=`
    <div class="Card-product" id="CardProduct" >
    <div>
      <a class="product-link" href="#">
        <div>
            <img
            alt="Кроссовки ${arrProduct[i].brand}"
            title="Кроссовки ${arrProduct[i].brand}"
            width="380"
            height="380"
            src="${arrProduct[i].img}"
            srcset="
              ${arrProduct[i].img},
              ${arrProduct[i].img2x}
            "
          />
        </div>
        ${discount}
        <div class="productParameters">
          <div>
            <div>${arrProduct[i].brand}</div>
            <div class="men">${arrProduct[i].category}</div>
            <div class="men">
                ${saeson}
                ${SeasonImg}
            </div>
          </div>
          <div>
            <span class="new-price">${Math.ceil(newPrice)} грн </span>
            ${oldPrice}
          </div>
        </div>
      </a>
    </div>
   </div>
    `;
  }

  // карточки одного ряду ложем в обертку <div class="cards-wrapper">
  cardsWrapper = `
      <div class="cards-wrapper">
          ${card}
      </div>
    `;
  //виводи товар на HTML страницу
  conteinerCards.innerHTML += cardsWrapper;
// ************************************

// Отложенная загрузка изображений 
// находим все обгортки карточок товара
wrapperCardsAll = document.querySelectorAll('.cards-wrapper');
// выбираем последнию обгортку з карточками 
wrapperCards = wrapperCardsAll[wrapperCardsAll.length-1];

//опции для отслежувания
const options = {
    // root ето елемент относитильно которого происходит отследжуеться 
    // если отследслежуем от вюпорта то root устанавливаем null 
    root: null,
    rootMargin:'0px', // на сколько ранше загружать картинку
    threshold: 0.3
}
function handleImg(conteinerCards, observer) {
      if(conteinerCards[0].intersectionRatio > 0) {
        render(arrProduct);
        // Прекратить наблюдение за (conteinerCards[0].target).
        observer.unobserve(conteinerCards[0].target);
      }
}
// создаем наблюдатель который каждый раз при пересечении conteinerCards "viewport" (за параметрамы options) вызываем функцию handleImg
const observer = new IntersectionObserver(handleImg, options);
//метод observe передает IntersectionObserver обект для наблюдения.
observer.observe(wrapperCards);

// /Отложенная загрузка изображений 
}
// ***********/render()************************


// *******************************************
// ********************************************
//  пры загрузки странице выводим количество карточок товара в ряд в зависимости от шырыны екрана
// рендерим переданое количество товара в ряду
function changes(screen, numberInARow) {
  if(screen.matches) {
    //очещаем HTML
    conteinerCards.innerHTML = '';
    //устанавлюваем индекс з которого будим рендерить ноль
    productsPerPage = 0;
    //запускаем функцию рендер в которою передаем количество товара в ряду
    cardsInRows = numberInARow;
    // если в масиве filterProduct) есть отфильтрованные товары то рендерим его
    if(filterProduct) {
        render(filterProduct);
    } else {
        // если нету то рендерим масив (Product) з всем товаром
        render(Product)
    }
  }
}
// ------------------------------------
// если шыына екрана менше чем 768px то виводим два товара в ряд (большие карточки "big")
  let screen1 = window.matchMedia("(max-width: 768px)");
  screen1.addListener(() => {
    changes(screen1, 2);
  });
  changes(screen1, 2);
// ------------------------------------
// если шыына екрана больше чем 481px то виводим два товара в ряд (большие карточки "big")
  let screen2 = window.matchMedia("(min-width: 481px)");
  screen2.addListener(() => {
    changes(screen2, 2);
  });
  changes(screen2, 2);
// ---------------------------------------
// если шыына екрана больше чем 768px то виводим три товара в ряд (большие карточки "big")
  let screen3 = window.matchMedia("(min-width: 768px)");
  screen3.addListener(() => {
    changes(screen3, 3);
  });
  changes(screen3, 3);
// ---------------------------------------------
// если шыына екрана менше чем 480px то виводим один товара в ряд (большие карточки "big")
  let screen4 = window.matchMedia("(max-width: 480px)");
  screen4.addListener(() => {
    changes(screen4, 1);
  });
  changes(screen4, 1);
// *******************************************
// ********************************************


