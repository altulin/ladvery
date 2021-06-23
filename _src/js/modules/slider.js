import Swiper from "swiper";

const aboutAdvantages = new Swiper(".about__advantages", {
  slidesPerView: 4,
  pagination: {
    el: ".about__pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

export default aboutAdvantages;
