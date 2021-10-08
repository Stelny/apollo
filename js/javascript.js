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

    const owlImage = $(".image__slider");
    owlImage.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        responsive: {
            991: {
                dots: false
            }
        }
    })

    $('.imageNext').click(function(e) {
        e.preventDefault();
        owlImage.trigger('next.owl.carousel');
    })
    $('.imagePrev').click(function(e) {
        e.preventDefault();
        owlImage.trigger('prev.owl.carousel');
    })

    $(".product_params_item_heading").click(function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    })

    $(".category-category li").click(function(e){
        e.preventDefault()
        $(this).toggleClass('active');  
    })

     // Range slider
     var rangeSlider = $("#range-slider");

        rangeSlider.each(function () {
        noUiSlider.create(this, {
        start: [7120, 14160],
        tooltips: false,
        step: 150,
        connect: true,
        range: {
        'min': [0],
        'max': [10000]
        },
        format: {
        to: function ( value ) {
        value = Math.round(value);
        return value+"€";
        },
        from: function ( value ) {
        return value.replace(',-', '');
        }
        }
        });
        });

        var priceRangeSlider = document.getElementById('range-slider');

        priceRangeSlider.noUiSlider.on('update', function(values, handle) {
        var value = values[handle];

        if (handle) {
        var right = value;
        } else {
        var left = value;
        }

        $("#slider-price-min").text(left);
        $("#slider-price-max").html(right);

     });
});
