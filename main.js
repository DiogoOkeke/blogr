"use strict";

// getting access to the DOM

let hamburgerMenu = document.querySelector(".hamburger-menu");
let firstBar = document.querySelector(".first-bar");
let secondBar = document.querySelector(".second-bar");
let thirdBar = document.querySelector(".third-bar");
let navTwo = document.querySelector(".navTwo");

// adding listening event to the hamburger menu

let clicked = false;

hamburgerMenu.addEventListener("click", () => {
  if (!clicked) {
    firstBar.classList.add("true");
    secondBar.classList.add("true");
    thirdBar.classList.add("true");
    navTwo.classList.add("true");
    clicked = true;
    console.log(" diogo");
  } else {
    firstBar.classList.remove("true");
    secon
    dBar.classList.remove("true");
    thirdBar.classList.remove("true");
    navTwo.classList.remove("true");
    clicked = false;
    console.log("ndaeyo");
  }
});
