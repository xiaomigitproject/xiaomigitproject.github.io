const swiper = new Swiper('.horizontal_swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
        delay: 8000,
        disableOnInteracrion: false,
    },

    preloadImages: false,
    lazy: true,
    lazy: {
      loadPrevNext: true,
    },

    breakpoints: {
    320: {
      direction: 'horizontal',
    },

  600: {
      direction: 'vertical',
    }
    }

  //   effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
  });

  const swiper2 = new Swiper('.horizontal_swiper_2', {
    loop: true,
    direction: "horizontal",

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: true,
        autoplay: {
            delay: 4000,
            disableOnInteracrion: false,
        },

    },

    630: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    840: {
      spaceBetween: 50,
      slidesPerView: 2.5,
    },
    }
  });