"use strict";

let burgerBtn = document.getElementById("burger_btn");
let burgerMenu = document.getElementById("burger_menu");
let btnToggleMode = document.getElementById("button_toggle_mode");
let btnToggleModeOffer = document.getElementById("button_toggle_mode_offer");
let progress = document.querySelector('.page_line');
let popup_list = document.getElementById("popup_list");
let popup_btn = document.getElementById("popup_btn");
let body = document.body;

function toggleOpenClass(){
    burgerBtn.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    if(burgerMenu.classList.contains("open")){
        body.style.overflow = "hidden";
        body.style.height = "100vh";
    } else {
        body.style.overflow = "auto";
        body.style.height = "auto";
    }
}

function toggleOpenPopUp(){
  popup_btn.classList.toggle("open");
  popup_list.classList.toggle("open");
  if(popup_btn.classList.contains("open")){
      body.style.overflow = "hidden";
      body.style.height = "100vh";
  } else {
      body.style.overflow = "auto";
      body.style.height = "auto";
  }
}

function progressBar(e){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
}

function toggleMode() {
    body.classList.toggle("page_white_mode");
}

function toggleModeOffer() {
  body.classList.toggle("page_white_mode");
}

btnToggleMode.addEventListener("click", toggleMode);
btnToggleModeOffer.addEventListener("click", toggleModeOffer);
burgerBtn.addEventListener("click", toggleOpenClass);
burgerMenu.addEventListener("click", toggleOpenClass);
window.addEventListener('scroll', progressBar);
popup_btn.addEventListener('click', toggleOpenPopUp);