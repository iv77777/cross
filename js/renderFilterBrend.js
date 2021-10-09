// Находим контеинер фильтрации з чекбоксамы брендов
const checkboxWrappe = document.querySelector('#checkboxWrappe');
//Формируем и вставляем HTML з чекбоксами и имям брендов в фильтр по брендам
function renderFilterBrandName(Product) {
    // Получает названия всех брендов (в массиве Product) в одном екземпляре 
    // массив для брендов
    let productName = [];
    let gsdg = 0;
    
    Product.forEach(product => {
        gsdg = 0;
    
        productName.forEach(brand => {
            if(product.brand === brand) {
              gsdg ++;
            }
        });
        
        if(!gsdg) {
          productName.push(product.brand);
        }
    });
    // Получили все бренды

    let labelCheckbox;

    productName.forEach(Namebrand => {
        labelCheckbox = `
        <div class="labelCheckbox">
        <label>
            <input type="checkbox" class="checkbox" name="brands" value="${Namebrand}"/>
            <span class="fake"></span>
            <span class="text">${Namebrand}</span>&nbsp;
            <small>[0]</small>
        </label>
        </div>
        `
        // вставляем html з чекбоксами и имям брендов на страеицу HTML
        checkboxWrappe.innerHTML += labelCheckbox;

    });
     
    
}

renderFilterBrandName(Product);
