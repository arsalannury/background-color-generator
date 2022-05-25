"use strict";
var title = document.querySelector(".title");
var parag = document.querySelector(".current_color");
var app = document.querySelector("main");
var colorGenerate;
app.addEventListener("mousemove", function (e) {
    colorGenerate = Math.floor(Math.random() * 1000000);
    app.style.background = "#".concat(colorGenerate);
    parag.innerText = "#".concat(colorGenerate);
});
app.addEventListener("mousedown", function (e) {
    navigator.clipboard.writeText(colorGenerate.toString());
});
window.addEventListener("load", function () {
    alert("Click on the screen and copy color code");
});
