var elBtn = document.querySelector(".header__button-mode");
var elBtnsec = document.querySelector(".humburger__button-mode");
var elBody = document.querySelector("body");
var elIntro = document.querySelector(".intro");
var elQuick = document.querySelector(".quick")

elBtn.addEventListener("click", function () {
  elBody.classList.toggle("dark");
})
elBtnsec.addEventListener("click", function () {
  elBody.classList.toggle("dark");
})
elBtn.addEventListener("click", function () {
  elIntro.classList.toggle("darkmode");
})
elBtnsec.addEventListener("click", function () {
  elIntro.classList.toggle("darkmode");
})

elBtn.addEventListener("click", function () {
  elQuick.classList.toggle("quick-darkmode");
})
elBtnsec.addEventListener("click", function () {
  elQuick.classList.toggle("quick-darkmode");
})