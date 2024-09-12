document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.banner__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
        loop: true,
        gutter:50,
        center:true,
        mouseDrag:true,
        responsive:{
          850: {
            nav:true
          }
        },
    });
});