// нахоим контеинер в котором лежат все фильтра
const conteiner = document.querySelector('.conteiner');
// нахоим контеинер в котором лежат все фильтра
const youChoosed = document.querySelector('#youChoosed');
//контеинер для всех товаров на странице
const conteinerCards = document.querySelector('.conteiner-cards');
// кнопка фильтер 
const buttonFilter = document.querySelector('#button-filter');
// находим все кнопки фильтрацыи
const buttonId = document.querySelectorAll('.buttonId');
// кнопка отфильтровать в  меню фильта
const buttonFiltered = document.querySelector('#buttonFiltered');
//количество товара на кнопке отфильтровать
const buttonFilteredSpan = document.querySelector('#buttonFilteredSpan');
// кнопки (Мужчинам, Женщинам, Детям) в подменю "Пол"
const buttonYouId = document.querySelectorAll('.buttonYouId');
// label з чекбоксамы по выбору бренда
const labelBrandsid = document.querySelectorAll('.labelBrandsid');
// находим текст Обуви (у списке Вы выбрали:)
const footwearText = document.querySelector('#footwear-text');
// находим контеинер (Вы выбрали:) (при скрытом Фильтре)
const Parameters = document.querySelector('#Parameters');
// нахоим контеинер в котором лежат все фильтра
const filtersWrapper = document.querySelector('#filters-wrapper');
// находим все инпуты з имям "season"
const inputSeason = document.querySelectorAll('input[name=season]');
// находим все инпуты з имям "brands"
const inputBrands = document.querySelectorAll('input[name=brands]');
// Получаем кнопки сортировки (По рейтингу, Сначала дешевле, Сначала дороже)
const buttonSortId = document.querySelectorAll('.buttonSortId');
// находи обготку кнопкы которая меняет товары в ряду
const buttonNumberRow = document.querySelector('#button-number-row');
// находим елемент когда один товар в ряду
const buttonNumberOneRow = document.querySelector('#one-row-big');
// находим елемент когда два товар в ряду
const buttonNumberTwoRow = document.querySelector('#one-row-small');



// Мсив з отфильтрованымы товарами (для сортировки)
let filterProduct;



// console.log(buttonSortIdRating);