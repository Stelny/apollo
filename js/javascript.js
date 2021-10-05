$(document).ready(function() {
    $('.hpmain-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        items:1,
        navText: [ '<img src="icons/hp_banner-left.svg" class="bannerPrev">', '<img src="icons/hp_banner-right.svg" class="bannerNext">' ],
    });
    $('.firmy-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        items:5,
        responsive:{
            0:{
                items:1,
                stagePadding: 80,
            },
            400:{
                items:1,
                stagePadding: 100,
            },
            500:{
                items:1,
                stagePadding: 130,
            },
            576:{
                items:1,
                stagePadding: 200,
            },
            993:{
                items:2,
                stagePadding: 275,
            },
            1200:{
                items:4,
                stagePadding: 275,
            }
        }
    });
    var owlNovinky = $('.novinky-slider');
    owlNovinky.owlCarousel({
        loop:true,
        margin:16,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                stagePadding: 30,
            },
            576:{
                items:2,
            },
            993:{
                items:4,
            },
            1200:{
                items:6,
            }
        }
    });
    $('.novinkyNext').click(function() {
        owlNovinky.trigger('next.owl.carousel');
    })
    $('.novinkyPrev').click(function() {
        owlNovinky.trigger('prev.owl.carousel');
    })
});
