const sidenav = document.querySelector(".sidenav");

const ham = document.getElementById("hamBurger");

var myNav = document.getElementById("nav");

ham.addEventListener("click", () => {
  sidenav.style.display = "initial";
  myNav.style.display = "none";
});

const cross = document.getElementById("sidenavCross");
cross.addEventListener("click", () => {
  sidenav.style.display = "none";
  myNav.style.display = "flex";
});

// chnaging navbar color when scroll

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};
