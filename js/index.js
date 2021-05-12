// Переменные и константы для сдвигов
var counterNav = 0;
const SHIFT_NAV = 80;
const FIRST_SHIFT_NAV = 40;
var counterSlide = 0;
const SHIFT_SLIDE = 220;
const FIRST_SHIFT_SLIDER = 220;

const navLinksList = document.querySelectorAll(".nav__link");
const sliderItems = document.querySelectorAll(".slider__item");

// Общая навигация
const navigateItems = function (navItem, navList, navCurrentClass, slideItem, slideList, sliderCurrentClass, ) {
  navItem.addEventListener("focus", function () {
    for (var i = 0; i < navList.length; i++) {
      navList[i].classList.remove(navCurrentClass);
      if (slideList[i]) slideList[i].classList.remove(sliderCurrentClass);
    }    
    navItem.classList.add(navCurrentClass);
    if (slideItem) slideItem.classList.add(sliderCurrentClass);
  });
}

// Навигация между жанрами
for (var i = 0; i < navLinksList.length; i++) {
  navigateItems(navLinksList[i], navLinksList, "nav__link--current", sliderItems[i], sliderItems,"slider__item--current");
}

const additionalMenuList = document.querySelectorAll(".additional-menu__link");

// Навигация доп. меню
for (var i = 0; i < additionalMenuList.length; i++) {
  navigateItems(additionalMenuList[i],additionalMenuList, "additional-menu__link--current", false, false, "");
}

// Навигация между фильмами

// Детективы
const previewDetective = document.querySelectorAll(".preview__link--detective");
const descriptionDetective = document.querySelectorAll(".description--detective");

for (var i = 0; i < previewDetective.length; i++) {
  navigateItems(previewDetective[i], previewDetective, "preview__link--current", descriptionDetective[i], descriptionDetective,"description--current");
}

// Фантастика
const previewFantastic = document.querySelectorAll(".preview__link--fantastic");
const descriptionFantastic = document.querySelectorAll(".description--fantastic");

for (var i = 0; i < previewFantastic.length; i++) {
  navigateItems(previewFantastic[i], previewFantastic, "preview__link--current", descriptionFantastic[i], descriptionFantastic,"description--current");
}

// Боевики
const previewThriller = document.querySelectorAll(".preview__link--thriller");
const descriptionThriller = document.querySelectorAll(".description--thriller");

for (var i = 0; i < previewThriller.length; i++) {
  navigateItems(previewThriller[i], previewThriller, "preview__link--current", descriptionThriller[i], descriptionThriller,"description--current");
}

// Для детей
const previewChildren = document.querySelectorAll(".preview__link--children");
const descriptionChildren = document.querySelectorAll(".description--children");

for (var i = 0; i < previewChildren.length; i++) {
  navigateItems(previewChildren[i], previewChildren, "preview__link--current", descriptionChildren[i], descriptionChildren,"description--current");
}

// Комедия
const previewComedy = document.querySelectorAll(".preview__link--comedy");
const descriptionComedy = document.querySelectorAll(".description--comedy");

for (var i = 0; i < previewComedy.length; i++) {
  navigateItems(previewComedy[i], previewComedy, "preview__link--current", descriptionComedy[i], descriptionComedy,"description--current");
}

// Мелодрама
const previewMelodrama = document.querySelectorAll(".preview__link--melodrama");
const descriptionMelodrama = document.querySelectorAll(".description--melodrama");

for (var i = 0; i < previewMelodrama.length; i++) {
  navigateItems(previewMelodrama[i], previewMelodrama, "preview__link--current", descriptionMelodrama[i], descriptionMelodrama,"description--current");
}

// Приключения
const previewAdventures = document.querySelectorAll(".preview__link--adventures");
const descriptionAdventures = document.querySelectorAll(".description--adventures");

for (var i = 0; i < previewAdventures.length; i++) {
  navigateItems(previewAdventures[i], previewAdventures, "preview__link--current", descriptionAdventures[i], descriptionAdventures,"description--current");
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
    .classList.remove("preview__link--current");
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
    changeDefalutBackground();
  }

  counterSlide = 0;
}

// Обработчик стрелки вниз
const onKeyDownHandler = function () {
  if (nav.focused) {
    var slideItem = document.querySelector(".slider__item--current")
      .querySelector(".preview__link");
    slideItem.focus();

    //Смена бекграунда
    changeBackground(slideItem)
  }
  if (additionalMenu.focused) {
    document.querySelector(".nav__link--current").focus();
  }
}

// Обработчик стрелки влево
const onKeyLeftHanlder = function () {
  navLeftMove();
  additionalMenuLeftMove();
  sliderLeftMov();
}

const navLeftMove = function () {
  if (nav.focused) {
    for (var i = 0; i < navLinksList.length; i++) {
      var currentItem = navLinksList[i].classList.contains("nav__link--current");
      if (currentItem && i > 0) {
        navLinksList[i - 1].focus();

        // Сдвиг
        counterNav = counterNav + SHIFT_NAV;
        nav.style.left = FIRST_SHIFT_NAV + counterNav + 'px';
        break;
      }
    }
  }
}

const additionalMenuLeftMove = function () {
  if (additionalMenu.focused) {
    for (var i = 0; i < additionalMenuList.length; i++) {
      var currentItem = additionalMenuList[i].classList.contains("additional-menu__link--current");
      if (currentItem && i > 0) {
        additionalMenuList[i - 1].focus();
        break;
      }
    }
  }
}

const sliderLeftMov = function () {
  if (slider.focused) {
    var slideItems = document.querySelector(".slider__item--current")
      .querySelectorAll(".preview__link");
    for (var i = 0; i < slideItems.length; i++) {
      var currentItem = slideItems[i].classList.contains("preview__link--current");
      
      if (currentItem && i > 0) {
        slideItems[i - 1].focus();

        //Смена бекграунда
        changeBackground(slideItems[i - 1]);

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
  navMenuRightMove();
  additionalMenuRightMove();
  sliderRightMov();
}

const navMenuRightMove = function () {
  if (nav.focused) {
    for (var i = 0; i < navLinksList.length; i++) {
      if (navLinksList[i].classList.contains("nav__link--current") && i < navLinksList.length - 1) {
        navLinksList[i + 1].focus();

        // Сдвиг
        counterNav = counterNav - SHIFT_NAV;
        nav.style.left = counterNav + 'px';
        break;
      }
    }
  }
}

const additionalMenuRightMove = function () {
  if (additionalMenu.focused) {
    for (var i = 0; i < additionalMenuList.length; i++) {
      if (additionalMenuList[i].classList.contains("additional-menu__link--current") && i < additionalMenuList.length - 1) {
        additionalMenuList[i + 1].focus();
        break;
      }
    }
  }
}

const sliderRightMov = function () {
  if (slider.focused) {
    var slideItems = document.querySelector(".slider__item--current")
      .querySelectorAll(".preview__link");
    for (var i = 0; i < slideItems.length; i++) {
      if (slideItems[i].classList.contains("preview__link--current") && i < slideItems.length - 1) {
        slideItems[i + 1].focus();

        //Смена бекграунда
        changeBackground(slideItems[i + 1]);

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
const wrapper = document.querySelector(".wrapper");

// Объект для хранения ссылок на бекграунды
const SrcBacgrounds = {
  default: "img/default-bg.png",
  shutterIsland: "img/bg-shutter-island.png",
  silenceLambs: "img/bg-the-silence.png",
  divergent: "img/bg-divergent.png",
  hungryGames: "img/bg-hungry-games.png",
  gameOfThrones: "img/bg-game-thrones.png",
  hellboy: "img/bg-hellboy.png",
  inception: "img/bg-inception.png",
  brother: "img/bg-brother.png",
  avatar: "img/bg-avatar.png",
  nuPogodi: "img/bg-nu-pogodi.png",
  zootopia: "img/bg-zootopia.png",
  lionKing: "img/bg-lion-king.png",
  intouchables: "img/bg-intouchable.png",
  gentlemen: "img/bg-gentelmens.png",
  operationShurick: "img/bg-operation-shurck.png",
  titanic: "img/bg-titanic.png",
  moscowCry: "img/bg-moscow-never-cry.png",
  eternalSunshine: "img/bg-eternal-sunshine.png",
  harry: "img/bg-harry.png",
  brilliant: "img/bg-brilliant.png",
  lordRings: "img/bg-lord-of-the-rings.png",
}

const changeBackground = function (item) {
  var srcBacground = SrcBacgrounds[item.id];
  wrapper.style.backgroundImage = "url('" + srcBacground + "')";
}

const changeDefalutBackground = function () {
  var srcBacground = SrcBacgrounds['default'];
  wrapper.style.backgroundImage = "url('" + srcBacground + "')";
}
