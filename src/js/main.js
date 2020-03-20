/* 6 + babel = 5
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function() {
  var modal = $('.modal'), 
    modalBtn = $('[data-toggle=modal]'), 
    closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible'); 
  });

  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible'); 
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').toggleClass('.scrollup--visibility').fadeIn('slow'); 
    } else {
      $('.scrollup').toggleClass('.scrollup--visibility').fadeOut('slow');
    }
  });
  $('.scrollup').click(function() {
    $('html, body').animate({scrollTop: 0}, 700);
    return false;
  });

  /*
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination-bull',
      type: 'bullets',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 30 + bullets.width() + 20);
  bullets.css('left', prev.width() + 30);
  */

 var mySwiper = new Swiper(".swiper-1", {
  loop: true,

  pagination: {
    el: ".projects__pagination",
    type: "bullets"
  },

  navigation: {
    nextEl: ".projects__swiper-button-next",
    prevEl: ".projects__swiper-button-prev"
  },

  slidesPerView: 1
});

var next = $(".projects__swiper-button-next");
var prev = $(".projects__swiper-button-prev");
var bullets = $(".projects__pagination");

next.css("left", prev.width() + 21 + bullets.width() + 21 + prev.position().left);
bullets.css("left", prev.width() + 21 + prev.position().left);

var mySwiper2 = new Swiper(".swiper-2", {
  effect: "fade",

  pagination: {
    el: ".steps__pagination",
    type: "bullets"
  },

  controller: {
    control: mySwiper3
  },

  fadeEffect: {
    crossFade: true
  }
});

var mySwiper3 = new Swiper(".swiper-3", {
  effect: "fade",

  pagination: {
    el: ".steps__counter-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: ".steps__button-next",
    prevEl: ".steps__button-prev"
  },

  controller: {
    control: mySwiper2
  },

  fadeEffect: {
    crossFade: true
  }
});

var next = $(".steps__button-next");
var prev = $(".steps__button-prev");
var bullets = $(".steps__pagination");

bullets.css("left", prev.width() + 21 + prev.position().left);
next.css("left", prev.width() + 21 + bullets.width() + 21 + prev.position().left);

$("#steps-button-0").click(function() {
  mySwiper3.slideTo(0);
});
$("#steps-button-1").click(function() {
  mySwiper3.slideTo(1);
});
$("#steps-button-2").click(function() {
  mySwiper3.slideTo(2);
});
$("#steps-button-3").click(function() {
  mySwiper3.slideTo(3);
});
$("#steps-button-4").click(function() {
  mySwiper3.slideTo(4);
});
$("#steps-button-5").click(function() {
  mySwiper3.slideTo(5);
});

mySwiper3.on("slideChange", function() {
  var activeSlide = "#steps-button-" + mySwiper3.realIndex;
  var prevSlide = "#steps-button-" + mySwiper3.previousIndex;

  $(activeSlide).removeClass("inactive");
  $(prevSlide).addClass("inactive");
});
});
