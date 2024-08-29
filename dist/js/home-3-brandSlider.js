var slider = tns({
    container: '.brandSlider__wrapper',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    edgePadding: 50,
    controls: false,
    mouseDrag: true,
    loop: false,
    gutter: 100,
     responsive: {
      900: {
        items: 3,
        gutter: 300
      }
    }  
  });