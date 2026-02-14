var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
    autoplay: {
      delay: 2500,
    },
    loop: true,
  },
});

var swiper = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 2400,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
    loop: true,
  },
});
