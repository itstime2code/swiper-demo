// import Swiper JS
import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";

// import Swiper styles
// import "swiper/swiper-bundle.min.css";

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiperParams = {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  rewind: true,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
  },

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    enabled: false,
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
};

const swiper = new Swiper(".swiper", swiperParams);
