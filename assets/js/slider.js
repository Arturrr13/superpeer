var swiper = new Swiper(".mySwiper", {
    spaceBetween: 39,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    history: {
      key: "slide",
    },
    breakpoints: {
        900: {
          slidesPerView: 2,
          spaceBetween: 39
        }
    }
});