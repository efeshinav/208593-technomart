var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".popup-close");
var name = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");

var slider = document.querySelector(".slider");
var viewPort = slider.querySelector(".view-port");
var currentSlide = viewPort.querySelector(".show-content");
var nextSlide = slider.querySelector(".icon-right");
var prevSlide = slider.querySelector(".icon-left");

var openMap = document.querySelector(".map");
var map = document.querySelector(".modal-content-map");
var closeMap = map.querySelector(".popup-close");

var services = document.querySelectorAll(".service");
var activeService = document.querySelector(".services-sections").querySelector(".active");

document.querySelector('.services-sections').addEventListener("click", function(event) {
  var id = event.target.id;
  activeService.classList.remove("active");
  event.target.classList.add("active");
  activeService = event.target;

  document.querySelector(".services").querySelector(".show-content").classList.remove("show-content");
  services[id].classList.add("show-content");
});

openMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.add("show-content");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  map.classList.remove("show-content");
})

nextSlide.addEventListener("click", function(event) {
  event.preventDefault();
  currentSlide.classList.remove("show-content");
  if (currentSlide == viewPort.lastElementChild) {
    currentSlide = viewPort.firstElementChild;
  } else {
    currentSlide = currentSlide.nextElementSibling;
  }
  currentSlide.classList.add("show-content");
});

prevSlide.addEventListener("click", function(event) {
  event.preventDefault();
  currentSlide.classList.remove("show-content");
  if (currentSlide == viewPort.firstElementChild) {
    currentSlide = viewPort.lastElementChild;
  } else {
    currentSlide = currentSlide.previousElementSibling;
  }
  currentSlide.classList.add("show-content");
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("show-modal-content");
  name.focus();
});

form.addEventListener("submit", function(event) {
  if (!email.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("show-modal-content");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("show-modal-content")) {
      popup.classList.remove("show-modal-content");
      popup.classList.remove("modal-error");
    }
  }
});
