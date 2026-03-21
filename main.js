"use strict";

// getting access to the DOM

let hamburgerMenu = document.querySelector(".hamburger-menu");
let firstBar = document.querySelector(".first-bar");
let secondBar = document.querySelector(".second-bar");
let thirdBar = document.querySelector(".third-bar");
let navTwo = document.querySelector(".navTwo");

// adding listening event to the hamburger menu.

hamburgerMenu.addEventListener("click", () => {
  firstBar.classList.toggle("true");
  secondBar.classList.toggle("true");
  thirdBar.classList.toggle("true");
  navTwo.classList.toggle("true");
  console.log(" nav clicked");
});
