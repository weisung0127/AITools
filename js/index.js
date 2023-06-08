$(document).ready(function(){

  //開啟手機選單
  $(".menu").click(function(){
      $(".mb_menu").fadeToggle();
      $(this).toggleClass("active");
  });

  //卡片slider
  if (typeof window.Swiper === 'function') { 
    const swiper = new Swiper('.swiper', {     
      spaceBetween: 24,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      },
       
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });
  }

  //回到頂端
  $(".top").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });



});