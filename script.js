"use strict";

let burgerBtn = document.getElementById("burger_btn");
let burgerMenu = document.getElementById("burger_menu");
let btnToggleMode = document.getElementById("button_toggle_mode");
let btnToggleModeOffer = document.getElementById('button_toggle_mode_offer');
let offer_scoot = document.getElementById('offer_scoot');
const progress = document.querySelector('.page_line');
let popup = document.getElementById("popup");
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

function progressBar(e){
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let per = windowScroll / windowHeight * 100;
  progress.style.width = per + '%';
}

function toggleMode() {
    body.classList.toggle("page_white_mode");
}

function toggleModeOffer(){
    if(btnToggleModeOffer.classList.toggle("offer_black_mode")){
        offer_scoot.style.overflow = auto;
    };
    // offer_scoot.classList.toggleModeOffer("offer_black_mode")
}

function enableBodyScroll() {
    if (document.readyState === "complete") {
      document.body.style.position = "";
      document.body.style.overflowY = "";
  
      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10);
        document.body.style.marginTop = "";
        window.scrollTo(window.pageXOffset, scrollTop);
      }
    } else {
      window.addEventListener("load", enableBodyScroll);
    }
}
  
function disableBodyScroll({ savePosition = false } = {}) {
    if (document.readyState === "complete") {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition)
          document.body.style.marginTop = `-${window.pageYOffset}px`;
        document.body.style.position = "fixed";
        document.body.style.overflowY = "scroll";
      }
    } else {
      window.addEventListener("load", () => disableBodyScroll({ savePosition }));
    }
}

function closePopup() {
    enableBodyScroll();
}

function openPopup() {
    disableBodyScroll();
    disableBodyScroll({ savePosition: true });
}


btnToggleMode.addEventListener("click", toggleMode);
btnToggleModeOffer.addEventListener("click", toggleModeOffer);
burgerBtn.addEventListener("click", toggleOpenClass);
burgerMenu.addEventListener("click", toggleOpenClass);
window.addEventListener('scroll', progressBar);
// popup_btn.addEventListener("click", openPopup);
// popup.addEventListener("click", closePopup);