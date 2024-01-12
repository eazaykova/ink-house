// Меню бургер
const iconMenu = document.querySelector(".menu__icon");
const bodyMenu = document.querySelector(".menu__body");
const basketHeader = document.querySelector(".header__basket");

if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    bodyMenu.classList.toggle("_active");
    basketHeader.classList.toggle("_hide");
  });
}
