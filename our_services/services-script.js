let head = document.querySelector("header");
var scrollToTop = document.querySelector(".up");
window.onscroll = function () {
  let y = window.scrollY;
  if (y > 1000) {
    head.style.display = "none";
    scrollToTop.classList.add("show");
} else {
    head.style.display = "flex";
    scrollToTop.classList.remove("show");
  }
};


//show menu when click on bars-icon
let floatDiv = document.querySelector(".floating-div");
let menu = document.querySelector(".menu");
document.querySelector(".bar-icons").onclick = function () {
  menu.classList.add("to-right");
  floatDiv.style.display = "block";
};
document.querySelector(".x-mark").onclick = function () {
  menu.classList.remove("to-right");
  floatDiv.style.display = "none";
};
floatDiv.onclick = function () {
  menu.classList.remove("to-right");
  floatDiv.style.display = "none";
};



scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};