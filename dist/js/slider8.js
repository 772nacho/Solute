var slider = tns({
  container: '.sec8__slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  mouseDrag: true,
  nav: false,
  autoplayButtonOutput: false,
  loop: false,
  controlsContainer: ".sec8__slider--controls",
  responsive: {
    900: {
      controls: true,
      slideBy: 1,
      items: 3,
      gutter: 160,
    }
  }
});