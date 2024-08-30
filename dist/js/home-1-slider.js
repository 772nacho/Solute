
document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.review__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: true,
        nav: false,
        gutter:0,
        center:true,
        mouseDrag:true,
        responsive: {
            900: {
              items: 2,
              gutter:50,
              edgePadding:50
            }
          },
        controlsText: [
        '<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'
        ]
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.brand__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
        responsive: {
            900: {
              items: 2
            }
          },
        mouseDrag:true,
        center:true,
        loop:true,
        responsive:{
            900:{
                items:2,
            }

        }

     });
});


document.addEventListener('DOMContentLoaded', function() {
    var slider = tns({
        container: '.blog__slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
        gutter:50,
        center:true,
        mouseDrag:true,
        responsive: {
            900: {
              items: 3
            }
          },
    });
});

