"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 2,
    slides = document.querySelectorAll(".clients-review__item"),
    dots = document.querySelectorAll(".slider-nav__item"),
    dotsWrap = document.querySelector(".slider-nav__list");

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("slider-nav__item--active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("slider-nav__item--active");
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  dotsWrap.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (
        event.target.classList.contains("slider-nav__item") &&
        event.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });

  // Menu btn
  const menuBtn = document.querySelector(".main-nav__btn"),
    menu = document.querySelector(".main-nav_list-wrap"),
    closeMenu = document.querySelector(".menu-close-btn");

  menuBtn.addEventListener("click", function () {
    menu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == menuBtn;
    const menu_is_active = menu.classList.contains("active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      menu.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      menu.classList.remove("active");
    }
  });

  const goBtn = document.querySelector("#go-next");
  const toSection = document.querySelector(".main-page");

  goBtn.addEventListener("click", function () {
    toSection.scrollIntoView({ behavior: "smooth" });
  });
});
