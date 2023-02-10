$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,

    prevArrow:
      '<button type="button" class="slick-prev"><img src="../../src/icons/slider_left_arrow.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../../src/icons/slider_right_arrow.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  })
})
