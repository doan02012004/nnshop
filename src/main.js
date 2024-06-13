$(document).ready(function(){
    new Swiper(".best-seller", {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         breakpoints: {
             768: {
                 centeredSlides: false,
             },
         },
     });
     new Swiper(".testimonials", {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         navigation: {
             nextEl: ".swiper-testimonials-button-next",
             prevEl: ".swiper-testimonials-button-prev",
         },
         breakpoints: {
             768: {
                 centeredSlides: false,
             },
         },
     });
     new Swiper(".myTopsell", {
         slidesPerView: 3,
         spaceBetween: 32,
         centeredSlides: true,
         navigation: {
             nextEl: ".topsell-next",
             prevEl: ".topsell-prev",
         },
         breakpoints: {
             768: {
                 slidesPerView: 3,
                 centeredSlides: false,
               },
               0: {
                 slidesPerView: 1.5,
                 centeredSlides: true,
               },
         },
     });
     new Swiper(".myPanel", {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         navigation: {
             nextEl: ".panel-next",
             prevEl: ".panel-prev",
         },
         pagination: {
             el: ".swiper-pagination",
           },
           mousewheel: true,
           keyboard: true,
         breakpoints: {
             768: {
                 centeredSlides: false,
             },
         },
     });
  
     $(".my-rating").starRating({
         totalStars: 5,
         starShape: "rounded",
         strokeColor: "#894A00",
         strokeWidth: 10,
         starSize: 25,
     });
  });