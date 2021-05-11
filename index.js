// Переменные и константы для сдвигов
var counterNav = 0;
const SHIFT_NAV = 80;
const FIRST_SHIFT_NAV = 40;
var counterSlide = 0;
const SHIFT_SLIDE = 220;
const FIRST_SHIFT_SLIDER = 220;

const navList = document.querySelectorAll(".nav__link");
const sliderItems = document.querySelectorAll(".slider__item");

// Общая навигация
const addSliderFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < navList.length; i++){
            sliderItems[i].classList.remove("slider__item--current");
            navList[i].classList.remove("nav__link--current");
        }
        slide.classList.add("slider__item--current");
        navItem.classList.add("nav__link--current");
    });
};

for (var i = 0; i < navList.length; i++){
  addSliderFocusHandler(navList[i],sliderItems[i]);
}

const additionalMenuList = document.querySelectorAll(".additional-menu__link");

// Навигация доп. меню
const addAddMenuFocusHandler = function (navItem) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < additionalMenuList.length; i++){
          additionalMenuList[i].classList.remove("additional-menu__link--current");
        }
        navItem.classList.add("additional-menu__link--current");
    });
};

for (var i = 0; i < additionalMenuList.length; i++){
  addAddMenuFocusHandler(additionalMenuList[i]);
}


// Навигация между фильмами

// Детективы
const previewDetective = document.querySelectorAll(".preview__link--detective");
const descriptionDetective = document.querySelectorAll(".description--detective");

const addDetectiveFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewDetective.length; i++){
            previewDetective[i].classList.remove("preview__link--current");
            descriptionDetective[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewDetective.length; i++) {
  addDetectiveFocusHandler(previewDetective[i],descriptionDetective[i]);
}


// Фантастика
const previewFantastic = document.querySelectorAll(".preview__link--fantastic");
const descriptionFantastic = document.querySelectorAll(".description--fantastic");

const addFantasticFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewFantastic.length; i++){
            previewFantastic[i].classList.remove("preview__link--current");
            descriptionFantastic[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewFantastic.length; i++) {
  addFantasticFocusHandler(previewFantastic[i],descriptionFantastic[i]);
}

// Боевики
const previewThriller = document.querySelectorAll(".preview__link--thriller");
const descriptionThriller = document.querySelectorAll(".description--thriller");

const addThrillerFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewThriller.length; i++){
          previewThriller[i].classList.remove("preview__link--current");
          descriptionThriller[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewThriller.length; i++) {
  addThrillerFocusHandler(previewThriller[i],descriptionThriller[i]);
}

// Для детей
const previewChildren = document.querySelectorAll(".preview__link--children");
const descriptionChildren = document.querySelectorAll(".description--children");

const addChildrenFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewChildren.length; i++){
          previewChildren[i].classList.remove("preview__link--current");
          descriptionChildren[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewChildren.length; i++) {
  addChildrenFocusHandler(previewChildren[i],descriptionChildren[i]);
}

// Комедия
const previewComedy = document.querySelectorAll(".preview__link--comedy");
const descriptionComedy = document.querySelectorAll(".description--comedy");

const addComedyFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewComedy.length; i++){
          previewComedy[i].classList.remove("preview__link--current");
          descriptionComedy[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewComedy.length; i++) {
  addComedyFocusHandler(previewComedy[i],descriptionComedy[i]);
}

// Мелодрама
const previewMelodrama = document.querySelectorAll(".preview__link--melodrama");
const descriptionMelodrama = document.querySelectorAll(".description--melodrama");

const addMelodramaFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewMelodrama.length; i++){
          previewMelodrama[i].classList.remove("preview__link--current");
          descriptionMelodrama[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewMelodrama.length; i++) {
  addMelodramaFocusHandler(previewMelodrama[i],descriptionMelodrama[i]);
}

// Приключения
const previewAdventures = document.querySelectorAll(".preview__link--adventures");
const descriptionAdventures = document.querySelectorAll(".description--adventures");

const addAdventuresFocusHandler = function (navItem,slide) {
  navItem.addEventListener("focus", function(){
        for (var i=0; i < previewAdventures.length; i++){
          previewAdventures[i].classList.remove("preview__link--current");
          descriptionAdventures[i].classList.remove("description--current");
        }
        slide.classList.add("description--current");
        navItem.classList.add("preview__link--current");
    });
};

for (var i = 0; i < previewAdventures.length; i++) {
  addAdventuresFocusHandler(previewAdventures[i],descriptionAdventures[i]);
}


// Фокус и расфокус между меню
const nav = document.querySelector(".nav ");
const additionalMenu = document.querySelector(".additional-menu");
const slider = document.querySelector(".slider");

nav.addEventListener("focusin", function () {
  nav.classList.remove('js-nofocus');
   // Флаг состояния фокуса
   nav.focused = true;
})

nav.addEventListener("focusout", function () {
  nav.classList.add('js-nofocus');
   // Флаг состояния фокуса
   nav.focused = false;
})

slider.addEventListener("focusin", function () {
   // Флаг состояния фокуса
   slider.focused = true;
})

slider.addEventListener("focusout", function () {
  document.querySelector(".preview__link--current")
  .classList.remove("preview__link--current")
   // Флаг состояния фокуса
   slider.focused = false;
})

additionalMenu.addEventListener("focusin", function () {
  additionalMenu.classList.remove('js-nofocus');
   // Флаг состояния фокуса
   additionalMenu.focused = true;
})

additionalMenu.addEventListener("focusout", function () {
  document.querySelector(".additional-menu__link--current")
  .classList.remove("additional-menu__link--current")
  additionalMenu.classList.add('js-nofocus');
  // Флаг состояния фокуса
  additionalMenu.focused = false;
})


// Обработчик стрелок
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        onKeyUpHandler();
        break;
      case 40:
        onKeyDownHandler();
        break;
      case 37:
        onKeyLeftHanlder();
        break;
      case 39:
        onKeyRightHanlder();
        break;
      default:
        break;
    }
}

// Функции для перемещения по интерфейсу
const additionalMenuLink = document.querySelector("#additional-menu-link");
const navMenuLink = document.querySelector("#nav-link");


// Ставим отправную точку фокуса
navMenuLink.focus();

// Обработчик стрелки вверх
const onKeyUpHandler = function () {
  if (nav.focused) {
    additionalMenuLink.focus();
  }

  if (slider.focused) {
    document.querySelector(".nav__link--current").focus();
  }

  counterSlide = 0;
}

// Обработчик стрелки вниз
const onKeyDownHandler = function () {
  if (nav.focused) {
    var slideItem = document.querySelector(".slider__item--current")
    .querySelector(".preview__link");
    slideItem.focus();
  //  changeBackground(slideItem)
  }
  if (additionalMenu.focused) {
    navMenuLink.focus();
  }
}


// Обработчик стрелки влево
const onKeyLeftHanlder = function () {

  if (nav.focused) {
    for (var i=0; i < navList.length; i++){
      if (navList[i].classList.contains("nav__link--current") && i > 0) {
        navList[i-1].focus();

        // Сдвиг
        counterNav = counterNav + SHIFT_NAV;
        nav.style.left = FIRST_SHIFT_NAV + counterNav + 'px';
        break;
      }
    }
  }

  if (additionalMenu.focused) {
    for (var i=0; i < additionalMenuList.length; i++){
      if (additionalMenuList[i].classList.contains("additional-menu__link--current") && i > 0) {
        additionalMenuList[i-1].focus();
        break;
      }
    }
  }

  if (slider.focused) {
    var slideItems = document.querySelector(".slider__item--current")
    .querySelectorAll(".preview__link");
    for (var i=0; i < slideItems.length; i++){
      if (slideItems[i].classList.contains("preview__link--current") && i > 0) {
        slideItems[i-1].focus();


        // Сдвиг
        var previewListCurrent = document.querySelector(".slider__item--current")
        .querySelector(".preview__list");
        counterSlide = counterSlide + SHIFT_SLIDE;
        previewListCurrent.style.left = FIRST_SHIFT_SLIDER + counterSlide + 'px';
        break;
      }
    }
  }
}

// Обработчик стрелки вправо

const onKeyRightHanlder = function () {

  if (nav.focused) {
    for (var i=0; i < navList.length; i++){
      if (navList[i].classList.contains("nav__link--current") && i < navList.length-1) {
        navList[i+1].focus();

        // Сдвиг
        counterNav = counterNav - SHIFT_NAV;
        nav.style.left = counterNav + 'px';
        break;
      }
    }
  }

  if (additionalMenu.focused) {
    for (var i=0; i < additionalMenuList.length; i++){
      if (additionalMenuList[i].classList.contains("additional-menu__link--current") && i < navList.length-1) {
        additionalMenuList[i+1].focus();
        break;
      }
    }
  }

  if (slider.focused) {
    var slideItems = document.querySelector(".slider__item--current")
    .querySelectorAll(".preview__link");
    for (var i=0; i < slideItems.length; i++){
      if (slideItems[i].classList.contains("preview__link--current") && i < slideItems.length-1) {
        slideItems[i+1].focus();
         // Сдвиг
         var previewListCurrent = document.querySelector(".slider__item--current")
         .querySelector(".preview__list");
         counterSlide = counterSlide - SHIFT_SLIDE;
         previewListCurrent.style.left = FIRST_SHIFT_SLIDER + counterSlide + 'px';
         break;
      }
    }
  }
}

// Функция замены фоновой картинки на размытый бекграунд
// const wrapper = document.querySelector(".wrapper");

// const changeBackground = function (item) {
//   wrapper.style.backgroundImage = "url('+" + item.src + "')" ;
// }



