const { PDFDocument, StandardFonts, rgb } = PDFLib

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const body = document.body;
const widthInput = document.querySelector('.input');
const heightInput = document.querySelector('.height-input');
const error = document.querySelector('.error');
const errorText = document.querySelectorAll('.error-text')
const imgWindow = document.querySelector(".img-window");
const mySelect = document.getElementById("mySelect");
const mySelect2 = document.getElementById("mySelect2");
const mySelect3 = document.getElementById("mySelect3");
const mySelect4 = document.getElementById("mySelect4");
const mySelect5 = document.getElementById("mySelect5");
const mySelect6 = document.getElementById("mySelect6");
const mySelect7 = document.getElementById("mySelect7");
const mySelect8 = document.getElementById("mySelect8");
const mySelect9 = document.getElementById("mySelect9");
const mySelect10 = document.getElementById("mySelect10");
const mySelect11 = document.getElementById("mySelect11");
const mySelect12 = document.getElementById("mySelect12");
const card = document.querySelectorAll('.number-sashes');
const doubleGlassCheckbox = document.querySelector('input[value="DoubleGlazing"]');
const secondCustomSelect = document.querySelector('.custom-select-hidden');
const getDocumentPDF = document.querySelector('.get-document')

const textFullprice = document.querySelector('.text-fullprice')

let fullprice = 0;
let selectedBlockIndex = null;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');

  const isMenuActive = menu.classList.contains('active');

  if (isMenuActive) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

// Находим все элементы .window
const windowBlocks = document.querySelectorAll(".window");

// Добавляем обработчик клика к каждому .window
windowBlocks.forEach((windowBlock) => {
    windowBlock.addEventListener("click", (e) => {
        // Убираем цвет у всех .window
        windowBlocks.forEach((block) => {
            block.style.backgroundColor = "transparent";
        });

        // Убираем белый бордер у всех div-ов во всех .window
        const divs = document.querySelectorAll(".window div");
        divs.forEach((div) => {
            div.style.border = "1px solid #C8C9CA";
        });

        // Устанавливаем белый бордер для всех div-ов в текущем .window
        const divsInCurrentWindow = windowBlock.querySelectorAll("div");
        divsInCurrentWindow.forEach((div) => {
            div.style.border = "1px solid white";
        });

        // При клике изменяем фон текущего .window на синий
        windowBlock.style.backgroundColor = "#0069B4";
    });
});

windowBlocks.forEach((windowBlock, index) => {
    windowBlock.addEventListener("click", () => {
        console.log(index);
        const titleWindows = document.querySelector('.title-windows')

        if (selectedBlockIndex !== null && selectedBlockIndex !== index) {
            fullprice = 0; // Обнуляем fullprice при выборе нового блока
        }

        selectedBlockIndex = index;

        if (!windowBlock.classList.contains('selected')) {
            windowBlocks.forEach(block => {
                block.classList.remove('selected');
            });
        
            windowBlock.classList.add('selected');

        if(index == 0){
          const typeWindows = document.querySelector('.type-windows')
            typeWindows.src = "./img/one-window.svg"
            titleWindows.textContent = 'Одностворчатое окно';
            fullprice += 6600
            textFullprice.textContent = `${fullprice} руб`
          card[0].style.display = 'block'
          card[1].style.display = 'none'
          card[2].style.display = 'none'
          card[3].style.display = 'none'
          card[4].style.display = 'none'
          card[5].style.display = 'none'
          card[6].style.display = 'none'
          card[7].style.display = 'none'
          card[8].style.display = 'none'
          card[9].style.display = 'none'
          card[10].style.display = 'none'
          card[11].style.display = 'none'
        }
        if(index == 1){
            const typeWindows = document.querySelector('.type-windows')
            typeWindows.src = "./img/two-window.svg"
            titleWindows.textContent = 'Двухстворчатое окно'
            fullprice += 12900
            textFullprice.textContent = `${fullprice} руб`
          card[0].style.display = 'none'
          card[1].style.display = 'block'
          card[2].style.display = 'block'
          card[3].style.display = 'none'
          card[4].style.display = 'none'
          card[5].style.display = 'none'
          card[6].style.display = 'none'
          card[7].style.display = 'none'
          card[8].style.display = 'none'
          card[9].style.display = 'none'
          card[10].style.display = 'none'
          card[11].style.display = 'none'
        }
        if(index == 2){
          const typeWindows = document.querySelector('.type-windows')
            typeWindows.src = "./img/three-windows.svg"
            titleWindows.textContent = 'Трёхстворчатое окно'
            fullprice += 18720
            textFullprice.textContent = `${fullprice} руб`
          card[0].style.display = 'none'
          card[1].style.display = 'none'
          card[2].style.display = 'none'
          card[3].style.display = 'block'
          card[4].style.display = 'block'
          card[5].style.display = 'block'
          card[6].style.display = 'none'
          card[7].style.display = 'none'
          card[8].style.display = 'none'
          card[9].style.display = 'none'
          card[10].style.display = 'none'
          card[11].style.display = 'none'
        }
        if(index == 3){
          const typeWindows = document.querySelector('.type-windows')
            typeWindows.src = "./img/arch-windows.svg"
            titleWindows.textContent = 'Арочное окно'
            fullprice += 23800
            textFullprice.textContent = `${fullprice} руб`
          card[0].style.display = 'none'
          card[1].style.display = 'none'
          card[2].style.display = 'none'
          card[3].style.display = 'none'
          card[4].style.display = 'none'
          card[5].style.display = 'none'
          card[6].style.display = 'block'
          card[7].style.display = 'block'
          card[8].style.display = 'block'
          card[9].style.display = 'none'
          card[10].style.display = 'none'
          card[11].style.display = 'none'
        }
        if(index == 4){
          const typeWindows = document.querySelector('.type-windows')
            typeWindows.src = "./img/balkon-windows.svg"
            titleWindows.textContent = 'Балконный блок'
            fullprice += 21900
            textFullprice.textContent = `${fullprice} руб`
          card[0].style.display = 'none'
          card[1].style.display = 'none'
          card[2].style.display = 'none'
          card[3].style.display = 'none'
          card[4].style.display = 'none'
          card[5].style.display = 'none'
          card[6].style.display = 'none'
          card[7].style.display = 'none'
          card[8].style.display = 'none'
          card[9].style.display = 'block'
          card[10].style.display = 'block'
          card[11].style.display = 'block'
        }
        const imgPath = windowBlock.getAttribute("data-img"); // Получаем путь к изображению

        imgWindow.src = imgPath; // Изменяем src изображения на странице

        // Установка стиля для активного .window блока
        windowBlock.style.backgroundColor = "#0069B4";
    }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  
    // Функция для обновления отображения общей стоимости
    const updateFullPrice = (price) => {
    fullprice += price;
      textFullprice.textContent = `${fullprice} руб`;
    };
  
    let mySelectPreviousPrice = 0;
    let mySelectPreviousPrice2 = 0;
    let mySelectPreviousPrice3 = 0;
    let mySelectPreviousPrice4 = 0;
    let mySelectPreviousPrice5 = 0;
    let mySelectPreviousPrice6 = 0;
    let mySelectPreviousPrice7 = 0;
    let mySelectPreviousPrice8 = 0;
    let mySelectPreviousPrice9 = 0;
    let mySelectPreviousPrice10 = 0;
    let mySelectPreviousPrice11 = 0;
    let mySelectPreviousPrice12 = 0;
    mySelect.addEventListener("change", () => {
      const selectedOption = mySelect.options[mySelect.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice);
        mySelectPreviousPrice = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice);
        mySelectPreviousPrice = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice);
        mySelectPreviousPrice = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice);
        mySelectPreviousPrice = price;
      }
    });

    mySelect2.addEventListener("change", () => {
      const selectedOption = mySelect2.options[mySelect2.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice2);
        mySelectPreviousPrice2 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice2);
        mySelectPreviousPrice2 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice2);
        mySelectPreviousPrice2 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice2);
        mySelectPreviousPrice2 = price;
      }
    });
    
    mySelect3.addEventListener("change", () => {
      const selectedOption = mySelect3.options[mySelect3.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice3);
        mySelectPreviousPrice3 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice3);
        mySelectPreviousPrice3 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice3);
        mySelectPreviousPrice3 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice3);
        mySelectPreviousPrice3 = price;
      }
    });

    mySelect4.addEventListener("change", () => {
      const selectedOption = mySelect4.options[mySelect4.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice4);
        mySelectPreviousPrice4 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice4);
        mySelectPreviousPrice4 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice4);
        mySelectPreviousPrice4 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice4);
        mySelectPreviousPrice4 = price;
      }
    });

    mySelect5.addEventListener("change", () => {
      const selectedOption = mySelect5.options[mySelect5.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice5);
        mySelectPreviousPrice5 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice5);
        mySelectPreviousPrice5 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice5);
        mySelectPreviousPrice5 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice5);
        mySelectPreviousPrice5 = price;
      }
    });

    mySelect6.addEventListener("change", () => {
      const selectedOption = mySelect6.options[mySelect6.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice6);
        mySelectPreviousPrice6 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice6);
        mySelectPreviousPrice6 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice6);
        mySelectPreviousPrice6 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice6);
        mySelectPreviousPrice6 = price;
      }
    });

    mySelect7.addEventListener("change", () => {
      const selectedOption = mySelect7.options[mySelect7.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice7);
        mySelectPreviousPrice7 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice7);
        mySelectPreviousPrice7 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice7);
        mySelectPreviousPrice7 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice7);
        mySelectPreviousPrice7 = price;
      }
    });

    mySelect8.addEventListener("change", () => {
      const selectedOption = mySelect8.options[mySelect8.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice8);
        mySelectPreviousPrice8 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice8);
        mySelectPreviousPrice8 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice8);
        mySelectPreviousPrice8 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice8);
        mySelectPreviousPrice8 = price;
      }
    });

    mySelect9.addEventListener("change", () => {
      const selectedOption = mySelect9.options[mySelect9.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice9);
        mySelectPreviousPrice9 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice9);
        mySelectPreviousPrice9 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice9);
        mySelectPreviousPrice9 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice9);
        mySelectPreviousPrice9 = price;
      }
    });

    mySelect10.addEventListener("change", () => {
      const selectedOption = mySelect10.options[mySelect10.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Глухое") {
        price = 600;
        updateFullPrice(price - mySelectPreviousPrice10);
        mySelectPreviousPrice10 = price;
      }
    });

    mySelect11.addEventListener("change", () => {
      const selectedOption = mySelect11.options[mySelect11.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Нет") {
        price = 0;
        updateFullPrice(price - mySelectPreviousPrice11);
        mySelectPreviousPrice11 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice11);
        mySelectPreviousPrice11 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice11);
        mySelectPreviousPrice11 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice11);
        mySelectPreviousPrice11 = price;
      }
    });

    mySelect12.addEventListener("change", () => {
      const selectedOption = mySelect12.options[mySelect12.selectedIndex].text;
      console.log(selectedOption);
      let price = 0;
  
      if (selectedOption === "Нет") {
        price = 0;
        updateFullPrice(price - mySelectPreviousPrice12);
        mySelectPreviousPrice12 = price;
      }else if(selectedOption === "Поворотно-Откидное"){
        price = 2900;
        updateFullPrice(price - mySelectPreviousPrice12);
        mySelectPreviousPrice12 = price;
      }
      else if(selectedOption === "Поворотное"){
        price = 1900;
        updateFullPrice(price - mySelectPreviousPrice12);
        mySelectPreviousPrice12 = price;
      }else if(selectedOption === "Откидное"){
        price = 2000;
        updateFullPrice(price - mySelectPreviousPrice12);
        mySelectPreviousPrice12 = price;
      }
    });
  
    let widthPreviousPrice = 0;
    const width = document.getElementById("width");
    width.addEventListener("change", function() {
      const selectedOption = width.options[width.selectedIndex].text;
      let price = 0;
      if(selectedOption === '0'){
        price = 0;
        updateFullPrice(price - widthPreviousPrice);
        mySelectPreviousPrice = price;
      } else if(selectedOption === '150 мм'){
        price = 400;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }else if(selectedOption === '200 мм'){
        price = 430;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }else if(selectedOption === '250 мм'){
        price = 500;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
      else if(selectedOption === '300 мм'){
        price = 560;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
      else if(selectedOption === '350 мм'){
        price = 590;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
      else if(selectedOption === '400 мм'){
        price = 670;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
      else if(selectedOption === '450 мм'){
        price = 870;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
      else if(selectedOption === '500 мм'){
        price = 1000;
        updateFullPrice(price - widthPreviousPrice);
        widthPreviousPrice = price;
      }
  
    });
  
    let pocketPreviousPrice = 0;
    const pocket = document.getElementById("pocket");
    pocket.addEventListener("change", function() {
      const selectedOption = pocket.options[pocket.selectedIndex].text;
      let price = 0;
  
      if(selectedOption === 'Стандартный'){
        price = 0;
        updateFullPrice(price - pocketPreviousPrice);
        pocketPreviousPrice = price;
      } else if(selectedOption === 'Теплосберегающий'){
        price = 300;
        updateFullPrice(price - pocketPreviousPrice);
        pocketPreviousPrice = price;
      }else if(selectedOption === 'Солнцезащитный'){
        price = 400;
        updateFullPrice(price - pocketPreviousPrice);
        pocketPreviousPrice = price;
      }else if(selectedOption === 'Шумозащитный'){
        price = 2000;
        updateFullPrice(price - pocketPreviousPrice);
        pocketPreviousPrice = price;
      }
    });

    let pocketPreviousPrice2 = 0;
    const pocket2 = document.getElementById("pocket2");
    pocket2.addEventListener("change", function() {
      const selectedOption = pocket2.options[pocket2.selectedIndex].text;
      let price2 = 0;
  
      if(selectedOption === 'Стандартный'){
        price2 = 0;
        updateFullPrice(price2 - pocketPreviousPrice2);
        pocketPreviousPrice = price2;
      } else if(selectedOption === 'Теплосберегающий'){
        price2 = 300;
        updateFullPrice(price2 - pocketPreviousPrice2);
        pocketPreviousPrice = price2;
      }else if(selectedOption === 'Солнцезащитный'){
        price2 = 400;
        updateFullPrice(price2 - pocketPreviousPrice2);
        pocketPreviousPrice = price2;
      }else if(selectedOption === 'Шумозащитный'){
        price2 = 2000;
        updateFullPrice(price2 - pocketPreviousPrice2);
        pocketPreviousPrice2 = price2;
      }
    });
  });

widthInput.addEventListener("input", () => {
  let price = 0;
  let inputValue = widthInput.value;
  
  inputValue = inputValue.replace(/[^\d]/g, '');
  if (Number(inputValue) > 499) {
    inputValue = inputValue.slice(0, 4);
    widthInput.value = inputValue;

    // Добавляем стоимость в зависимости от введенного числа
    const numberValue = Number(inputValue);
    console.log(numberValue);
    if (numberValue >= 501) {
      const additionalCost = (numberValue - 500) / 1;
      price += Math.round(additionalCost);
      console.log(price); // Выводим общую стоимость в консоль (замените эту строку на соответствующую логику)
    }
  }

  if (Number(inputValue) <= 499) {
    error.style.display = "block";
    errorText[0].style.display = "block";
  } else {
    error.style.display = "none";
    errorText[0].style.display = "none";
  }
  fullprice += price; // Обновляем общую стоимость
  updateFullPrice();
});

heightInput.addEventListener("input", () => {
  let inputValue = heightInput.value;
  let price = 0;
  
  inputValue = inputValue.replace(/[^\d]/g, '');
  if(Number(inputValue) > 499){
    inputValue = inputValue.slice(0, 4);
    heightInput.value = inputValue;
    
    const numberValue = Number(inputValue);
    if (numberValue >= 501) {
      const additionalCost = (numberValue - 500) / 2;
      price += Math.round(additionalCost);
      console.log(price); // Выводим общую стоимость в консоль (замените эту строку на соответствующую логику)
    }
  }
  if (Number(inputValue) <= 499) {
      error.style.display = "block";
      errorText[1].style.display = "block"
  }
  else {
      error.style.display = "none";
      errorText[1].style.display = "none"
  }
  fullprice += price; // Обновляем общую стоимость
  updateFullPrice();
});

widthInput.addEventListener("paste", (event) => {
  // Очищаем текст от нежелательных символов при вставке
  const pastedText = (event.clipboardData || window.clipboardData).getData('text');
  const cleanedText = pastedText.replace(/[^\d]/g, '');

  // Вставляем очищенный текст обратно в поле ввода
  document.execCommand('insertText', false, cleanedText);

  // Предотвращаем стандартное вставление текста
  event.preventDefault();
});

heightInput.addEventListener("paste", (event) => {
  // Очищаем текст от нежелательных символов при вставке
  const pastedText = (event.clipboardData || window.clipboardData).getData('text');
  const cleanedText = pastedText.replace(/[^\d]/g, '');

  // Вставляем очищенный текст обратно в поле ввода
  document.execCommand('insertText', false, cleanedText);

  // Предотвращаем стандартное вставление текста
  event.preventDefault();
});

const updateFullPrice = () => {
    textFullprice.textContent = `${fullprice} руб`;
  };

  const checkboxes = document.querySelectorAll(".input-cheked");
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
      const selectedCheckbox = this;
      let price = 0;

      // Добавляем стоимость, если чекбокс отмечен
      if (selectedCheckbox.checked) {
        if (selectedCheckbox.value === "Spurs") {
          price = 1000; // Цена для отмеченного чекбокса "Отливы"
        } else if (selectedCheckbox.value === "Slopes") {
          price = 400; // Цена для отмеченного чекбокса "Откосы"
        } else if (selectedCheckbox.value === "mosquitoNet") {
          price = 600; // Цена для отмеченного чекбокса "Москитная сетка" или "Монтаж"
        }
        else if (selectedCheckbox.value === "Mounting") {
            price = 700; // Цена для отмеченного чекбокса "Москитная сетка" или "Монтаж"
          }
      } else {
        if (selectedCheckbox.value === "Spurs") {
          price = -1000; // Вычитаем цену, если чекбокс не отмечен
        } else if (selectedCheckbox.value === "Slopes") {
          price = -400; // Вычитаем цену, если чекбокс не отмечен
        } else if (selectedCheckbox.value === "mosquitoNet") {
          price = -600; // Вычитаем цену, если чекбокс не отмечен
        }
        else if (selectedCheckbox.value === "Mounting") {
            price = -700; // Цена для отмеченного чекбокса "Москитная сетка" или "Монтаж"
          }
      }

      fullprice += price; // Обновляем общую стоимость
      updateFullPrice();
    });
  });

doubleGlassCheckbox.addEventListener('change', () => {
    if (this.checked) {
        secondCustomSelect.classList.remove('custom-select-hidden');
    } else {
        secondCustomSelect.classList.add('custom-select-hidden');
    }
});
async function createPdf() {
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create()

  // Embed the Times Roman font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  // Add a blank page to the document
  const page = pdfDoc.addPage()

  // Get the width and height of the page
  const { width, height } = page.getSize()

  // Draw a string of text toward the top of the page
  const fontSize = 15
  page.drawText('Если выведет документ  я сосал член у Карева', {
    x: 50 ,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  })

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()

  // Trigger the browser to download the PDF document
  download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}
getDocumentPDF.addEventListener('click', () => {
  createPdf();
})