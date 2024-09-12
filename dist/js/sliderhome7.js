var slider = tns({
    container: '.sec8__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    edgePadding: 50,
    controls: false,
    mouseDrag: true,
    loop: true,
    gutter: 100,
    responsive: {
      900: {
        items: 3,
        gutter: 300
    }
    }  
});