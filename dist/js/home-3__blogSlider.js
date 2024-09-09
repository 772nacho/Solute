  var slider = tns({
    container: '.blog-3__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    nav: false,
    loop: true,
    controlsContainer: ".blog-3__slider--controls",
    responsive: {
      900: {
        controls: true,
        slideBy: 1,
        items: 3,
        gutter: 20,
      }
    }
  });