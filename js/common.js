$(document).ready(function () {

    // percents initiation------------------------------------------
        $(window).scroll(function () {
            var h = $(window).scrollTop();
            var yourElementHeight = $(".percent").offset().top; // координаты высоты верхнего края yourElement

            if (h > yourElementHeight - 4850) {
                $('.percent').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');

                    $({countNum: $this.text()}).animate({
                            countNum: countTo
                        },
                        {
                            duration: 2000,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });


                });
            }
        });
    // percents initiation------------------------------------------

    // use animation--------------------------------------
    var steps = $('.animate-use li');

    function activeStep(arg) {
        $(arg).addClass("active");
        setTimeout(function () {
            $(arg).removeClass("active");
        }, 1000);

    }

    var timerStep = setInterval(function () {
        setTimeout(function () {
            activeStep(steps[0])
        }, 1500);
        setTimeout(function () {
            activeStep(steps[1])
        }, 3000);
        setTimeout(function () {
            activeStep(steps[2])
        }, 4500);
    }, 6000);

    // use animation--------------------------------------


    // arrows animation--------------------------------------
    var firstArrow = "div.arrow-1";
    var secondArrow = "div.arrow-2";
    var thirdArrow = "div.arrow-3";


    function arrowsAnimation(arg) {
        $(arg).removeClass("filter");
        setTimeout(function () {
            $(arg).addClass("filter");
        }, 1000);

    }

    var timerId = setInterval(function () {
        setTimeout(function () {
            arrowsAnimation(firstArrow)
        }, 1000);
        setTimeout(function () {
            arrowsAnimation(secondArrow)
        }, 1500);
        setTimeout(function () {
            arrowsAnimation(thirdArrow)
        }, 2000);

    }, 2500);

    // arrows animation--------------------------------------

    // show consist------------------------------
    $('.consist div li').on("click", function () {
        $('.consist div li').not(this).removeClass("active");
        $(this).toggleClass("active");
    });
    // show consist------------------------------

    // scroll----------------------------------
    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    // scroll----------------------------------


    // readmore----------------------------------
    $('.content').readmore({
        maxHeight: 450,
        moreLink: '<a class="toggle" href="#">+</a>',
        lessLink: '<a class="toggle active" href="#">-</a>',

    });

    $('.comment-text').readmore({
        maxHeight: 200,
        moreLink: '<a class="toggle" href="#">+</a>',
        lessLink: '<a class="toggle active" href="#">-</a>',

    });
    // readmore----------------------------------


    // slick----------------------------------

    $('.slider-photos').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // slick----------------------------------

    // year
    var today = new Date();
    var yr = today.getFullYear();
    $("#date").append(yr);


});
