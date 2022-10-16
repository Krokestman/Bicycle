const swiper = new Swiper('.swiper', {
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