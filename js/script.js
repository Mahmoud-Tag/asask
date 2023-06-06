/** @format */

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

/*
.
.
.
.
*/

// scroll to top when click on up div
var scrollToTop = document.querySelector(".up");
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*
.
.
.
.
*/

// control loading div with gsap library
gsap.fromTo(
  "#loading",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 3.5,
  }
);
const myTimeOut = setTimeout(() => {
  document.getElementById("loading").style.display = "none";
}, 5000);

/*
.
.
.
.
*/

//set Interval for spans to count to specific number when reach their section
let spans = document.querySelectorAll(".num");
let section = document.querySelector(".s5");
let head = document.querySelector("header");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    scrollToTop.classList.add("show");
    head.style.display = "none";
    if (!started) {
      spans.forEach((span) => startCount(span));
    }
    started = true;
  } else {
    head.style.display = "flex";
    scrollToTop.classList.remove("show");
  }

  function startCount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
      e.textContent++;
      if (e.textContent == goal) {
        clearInterval(count);
      }
    }, 1);
  }
};

/*
.
.
.
.
*/

// set up text to print, each item in array is new line
var aText = new Array(
  "لنقل العفش والاثاث المنزلي مع الفك والتركيب والتغليف مع خدمة متميزه وضمان  المحافظه علي الاثاث المنزلي، نقدم خدمات مميزة وشاملة لنقل جميع أنواع الأثاث"
);
var iSpeed = 20; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 2500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

setTimeout("typewriter()", 10500);
/*
.
.
.
.
.
.
.
.
.
.
.
.

.
.
.
*/

