const ham = document.getElementById("hamBurger");

var myNav = document.getElementById("nav");

const sidenav_container = document.querySelector(".container-fluid");

ham.addEventListener("click", () => {
  const sidenav = document.createElement("div");
  sidenav.setAttribute("class", "sidenav");
 
  // sidenav.style.visibility = "visible";

  const cross = document.createElement("img");
  cross.setAttribute("id", "sidenavCross");
  cross.setAttribute("src", "images/cross.png");

  cross.addEventListener("click", () => {
    sidenav.style.display = "none";
    myNav.style.display = "flex";
  });

  const hr = document.createElement("hr");

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
 

  const a1 = document.createElement("a");
  a1.innerHTML = "HOME";
  a1.setAttribute("href", "#");

  const a2 = document.createElement("a");
  a2.innerHTML = "ABOUT";
  a2.setAttribute("href", "#about");

  const a3 = document.createElement("a");
  a3.innerHTML = "PROJECTS";
  a3.setAttribute("href", "#projects");

  const a4 = document.createElement("a");
  a4.innerHTML = "CONTACT";
  a4.setAttribute("href", "#contactdiv");

  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
 

  sidenav.appendChild(cross);
  sidenav.appendChild(hr);
  sidenav.appendChild(ul);

  myNav.style.display = "none";
  sidenav_container.appendChild(sidenav);
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






// text animation 

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
