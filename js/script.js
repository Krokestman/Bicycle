const swiper = new Swiper('.slider-main-block', {
   // Optional parameters
   loop: true,
   // speed: 800,
   // Navigation arrows
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 10000,
      stopOnLastSlide: true,
      disableOnInteraction: false
   },

   // Прозоре переключення
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
});


new Swiper('.showcase-slider-swiper', {
   loop: false,
   slidesPerView: 4,
   slidesPerGroup: 2,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

/* const mediaQuery = window.matchMedia('(max-width: 990.98px)')
if (mediaQuery.matches) {
   alert('Media Query Matched!')
   new Swiper('.showcase-slider-swiper', {
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 1,
   });
} */