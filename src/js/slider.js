const prevArrow = $('.reviews__switch--left');
const nextArrow = $('.reviews__switch--right');

$('.slider-for').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav',
  // autoplay: true,
  // autoplaySpeed: 2000,
  mobileFirst: true,
});
$('.slider-nav').slick({
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  variableWidth: true,
  centerMode: true,
  // prevArrow: prevArrow,
  // nextArrow: nextArrow,
  // focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        // centerMode: false,
      },
    },
  ],
});
