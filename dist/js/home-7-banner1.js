var slider = tns({
    container: '.home-7-bannerSlider',
    mouseDrag: true,
    items: 1,
    slideBy: 'page',
    mode:'gallery',
    autoplay: false,
    controls: false,
    nav: false,
    navContainer: ".home-7-nav",
     responsive: {
      900: {
        nav: true,
      }
    }  
  });