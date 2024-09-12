var slider = tns({
    container: '.home-7__brandSlider__wrapper',
    items: 2,
    slideBy: 'page',
    edgePadding: 50,
    controls: false,
    mouseDrag: true,
    loop: true,
    nav: false,
    gutter: 100,
     responsive: {
      900: {
        items: 3,
        gutter: 300
      }
    }  
  });