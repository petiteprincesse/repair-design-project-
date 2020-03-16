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
});
