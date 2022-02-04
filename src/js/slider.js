$('.slider-for').slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 2000,
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
});
