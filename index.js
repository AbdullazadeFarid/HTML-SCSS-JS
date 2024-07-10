const defLang = document.querySelector(".def_lang");

const langHidden = document.querySelector(".lang_hidden");

// Language Menu

defLang.addEventListener("click", () => {
  langHidden.classList.toggle("hidden");
});

//

// burger menu

const burger = document.querySelector(".burger");

const navMobile = document.querySelector(".nav_mobile");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMobile.classList.toggle("active_nav_mobile");
});

///

let slideIndex = 0;
const slides = document.querySelectorAll(".products_slide");
const totalSlides = slides.length;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const showSlide = (index) => {
  const slider = document.querySelector(".products_slider");
  if (slider) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  } else {
    console.error("Slider element not found");
  }
};

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

//

// header scrool

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // 50 пикселей, можно изменить по своему усмотрению
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});





// ourteam slider


let swiper = new Swiper(".outteam_js", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  loop: true,
  navigation: {
    nextEl: ".nex_prev .next",
    prevEl: ".nex_prev .prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
