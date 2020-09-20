const burderButton = document.querySelector('.burger'),
   menu = document.querySelector('.menu'),
   inspItem = document.querySelectorAll('.insp__item'),
   playVideo = document.querySelectorAll('.main-slider__play');


burderButton.addEventListener('click', () => {
   menu.classList.toggle('menu--active');
   burderButton.classList.toggle('active');
});


var swiperSlider1 = new Swiper('.main-slider__container', {
   slidesPerView: 1,
   fadeEffect: {
      crossFade: true
   },
   loop: true,
   navigation: {
      prevEl: '.main-slider__btn-left',
      nextEl: '.main-slider__btn-right',
   }
});

swiperSlider1.on('slideChange', function () {
   let videos = document.querySelectorAll('.first__slider video');
   videos.forEach((el) => {
      el.pause();
   });
   playVideo.forEach((el) => {
      el.style.display = 'block';
   });
});

var swiper2 = new Swiper('.sliderSwiper2', {
   spaceBetween: 30,
   centeredSlides: false,
   slidesPerView: 1.5,
   loop: true,
   breakpoints: {
      768: {
         centeredSlides: false,
         slidesPerView: 1.5,
         spaceBetween: 60
      },
      992: {
         centeredSlides: true,
         slidesPerView: 2,
         spaceBetween: 80
      }
   }
});


playVideo.forEach((el) => {
   el.addEventListener('click', (e) => {
      let video = e.currentTarget.closest('.main-slider__media').querySelector('video').play();
      el.style.display = 'none';
      setTimeout(() => {
         video.volume = 0.1;
      }, 1000);
   });
});





// function testWebP(callback) {
//    var webP = new Image();
//    webP.onload = webP.onerror = function () {
//       callback(webP.height == 2);
//    };
//    webP.src =
//       "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {
//    if (support == true) {
//       document.querySelector("body").classList.add("webp");
//    } 
// });