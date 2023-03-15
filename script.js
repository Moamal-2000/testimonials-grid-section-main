"use strict";

const cards = document.querySelectorAll(".cards .card");




function animationUp(ele, duration = 1, delay = 1000) {
  ele.style.visibility = "hidden";
  ele.style.transform = "translateY(-800px)";

  setTimeout(() => (ele.style.transition = `all ${duration}s`), 500);
  setTimeout(() => {
    ele.style.visibility = "visible";
    ele.style.transform = "translateY(0)";
  }, delay);
}




function animationDown(ele, duration = 1, delay = 1000) {
  ele.style.visibility = "hidden";
  ele.style.transform = "translateY(800px)";

  setTimeout(() => (ele.style.transition = `all ${duration}s`), 500);
  setTimeout(() => {
    ele.style.visibility = "visible";
    ele.style.transform = "translateY(0)";
  }, delay);
}




function animationRight(ele, duration = 1, delay = 1000) {
  ele.style.visibility = "hidden";
  ele.style.transform = "translateX(800px)";

  setTimeout(() => (ele.style.transition = `all ${duration}s`), 500);
  setTimeout(() => {
    ele.style.visibility = "visible";
    ele.style.transform = "translateY(0)";
  }, delay);
}




function animationLeft(ele, duration = 1, delay = 1000) {
  ele.style.visibility = "hidden";
  ele.style.transform = "translateX(-800px)";

  setTimeout(() => (ele.style.transition = `all ${duration}s`), 500);``
  setTimeout(() => {
    ele.style.visibility = "visible";
    ele.style.transform = "translateY(0)";
  }, delay);
}




if (window.innerWidth >= 1500) {
  animationUp(cards[0], 1.5, 1000);
  animationUp(cards[1], 1.5, 1800);
  animationRight(cards[2], 1.5, 2600);
  animationDown(cards[4], 1.5, 3500);
  animationDown(cards[3], 1.5, 4200);
} else if (window.innerWidth <= 992) {
  animationLeft(cards[0], 1, 1000);
  animationRight(cards[1], 1, 1800);
  animationLeft(cards[2], 1, 2600);
  animationRight(cards[3], 1, 3500);
  animationLeft(cards[4], 1, 4400);
}
