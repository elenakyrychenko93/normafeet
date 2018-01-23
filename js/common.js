$(document).ready(function() {
    $('.consist div li').on( "click", function() {
        $('.consist div li').not(this).removeClass("active");
        $(this).toggleClass( "active" );
    });


    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var that = null;
    $('.slide').click(function () {
        that=this;
    })

    $('article').readmore({
        maxHeight: 126,
        moreLink: '<a href="#">+</a>',
        lessLink: '<a href="#">-</a>',
        afterToggle: function () {
            $(that).find('.img').toggleClass('hide');
        }
    });

    $('.slider-videos').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider-comments').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // <a href="#" class="readmore-js-toggle">Детальніше</a>
    // $( ".readmore-js-toggle" ).click(function() {
    //     $('.slide > .img').toggleClass('hide');
    //
    // });

    // year
    var today = new Date();
    var yr = today.getFullYear();
    $("#date").append(yr);



});
