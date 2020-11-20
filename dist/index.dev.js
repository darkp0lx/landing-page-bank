"use strict";

var menu = document.getElementById("menu");
var hambuerguer = document.getElementsByClassName("hambuerguer")[0];
hambuerguer.addEventListener("click", function () {
  menu.classList.toggle("active");
});