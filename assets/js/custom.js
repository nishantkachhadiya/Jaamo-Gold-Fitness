$(window).resize(function(){
    //  Slider Functions
    fitness_studio_slider();
    wir_empfehlen_slider();
    movement_slider();
    jahren_profile_slider();
    kurse_day_title();
});


$(document).ready(function(){
    // WOW js
    new WOW().init();

    // OWL casrousel
    fitness_studio_slider();
    wir_empfehlen_slider();
    movement_slider();
    jahren_profile_slider();
    kurse_day_title();

    if($ (window).width() < 1200 ) {
        $('.has-submenu > .menu-item').click(function(e){
            e.preventDefault()
            $(this).siblings().slideToggle(300);
            $(this).toggleClass('menu-open');
        });
    }

    //read more js 
    $('.moreless-button').click(function() {
        $(this).parents('.main_more_text').find('.moretext').slideToggle().parents('.movement_inner_section').find('.movement_inner_section').toggleClass('pb-0');
        if ($('.moreless-button span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
            
        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });
    $('.news_page .new_moreless-button').click(function() {
        $(this).parents('.news_more_text').find('.moretext').slideToggle();
        $(this).parents('.owl-item').siblings().find('.moretext').slideUp();
        if ($(this).parents('.news_more_text').find('.new_moreless-button span').text() == "weniger") {
            $(this).find('span').text("mehr lesen")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });

    // Kurse Tab and Table
    $('.kurse_day_section ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        var kurse_day = $(this).attr('id');
        $('.'+ kurse_day).addClass('active').siblings().removeClass('active'); 
    });
});



// OWL casrousel fitness-studio-owl
function fitness_studio_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".fitness-studio-owl");

    if (checkWidth >= 1201) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1200) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            /*loop:true,*/
            margin:0,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
            responsive:{
                0:{
                    items:1,
                },
                580:{
                    items:2,
                },
                850:{
                    items:3
                }
            }
        });
    }
}

// OWL casrousel wir-empfehlen-owl
function wir_empfehlen_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".wir-empfehlen-owl");

    if (checkWidth >= 1200) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 1199) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                767:{
                    items:2,
                },
                992:{
                    items:1
                }
            }
        });
    }
}

// OWL casrousel movement_slider
function movement_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".movement_section_slider");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            margin:20,
            dots:false,
            nav: true,
            dots: false,
            navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
            responsive:{
                0:{
                    items:1,
                },
                580:{
                    items:1,
                },
                850:{
                    items:1
                }
            }
        });
    }
}

// OWL casrousel jahren_profile_slider
function jahren_profile_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".jahren_profile_owl");

    if (checkWidth >= 576) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 575) {

        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            /*loop:true,*/
            margin:0,
            dots:false,
            nav: true,
            navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
            responsive:{
                0:{
                    items:1,
                },
            }
        });
    }
}


// das-sagen-unsere-owl
$('.das-sagen-unsere-owl').owlCarousel({
    /*loop:true,*/
    margin:10,
    nav:true,
    navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
    items:1,
    dots:true,
});

// news page slider
$('.new_slider_section .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2,
            margin:0
        },
        992:{
            items:3,
            margin:-20
        }
    }
});

// Kurseplan slider
$('.kursplan_slider_section .owl-carousel').owlCarousel({
    loop: false,
    margin: 58,
    nav: true,
    dots: false,
    navText: ["<img src='assets/images/home/owl-left-arrow.svg'>","<img src='assets/images/home/owl-right-arrow.svg'>"],
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2,
            margin:15,
        },
        767:{
            items:2
        },
        991:{
            items:3,
            margin:15,
        },
        1199:{
            items:3
        }
    }
});


// Accordion Js
$('.ct_accordion_wrap').click(function(){
    $(this).siblings().find('.ct_accordion_lable').removeClass('ct_visiable');
    $(this).find('.ct_accordion_lable').toggleClass('ct_visiable');

    $(this).siblings().find('.ct_accordion_info').slideUp();
    $(this).parents('.faq-col').siblings().find('.ct_accordion_info').slideUp();
    $(this).parents('.faq-col').siblings().find('.ct_visiable').removeClass('ct_visiable');
    $(this).find('.ct_accordion_info').slideToggle();
});



// Menu Js
$(".menu-toggle-btn").click(function(){
    $(".menu-nav-block").addClass("open");
    $(".nav-link").addClass("nav-link-open");
    $("body, html").addClass("cm-overflow");
});

$(".menu-back-btn").click(function(){
    $(".menu-nav-block").removeClass("open");
    $(".nav-link").removeClass("nav-link-open");
    $("body, html").removeClass("cm-overflow");
});


// footer-fixed menu
$(".footer-fixed-trigger").click(function(){
    $(".footer-fixed-trigger").toggleClass("active");
    $(".footer-fixed-icon").toggleClass("show");
});


function kurse_day_title(){
    if($(window).width() < 767){
        $(function(){
            $(".kurse_day_section ul li a").each(function(i){
                len=$(this).text().length;
                if(len>2)
                {
                    $(this).text($(this).text().substr(0,2) + '.');
                }
            });
        });
    }
    else if($(window).width() > 768){
        $(function(){
            var make_array = [];
            $('.kurse_day_section ul li').each(function(){
                make_array.push($(this).attr('data-title'));
            });
        
            $('.kurse_day_section ul li').each(function(index) {
                $(this).find('a').text(make_array[index]);
             });
        });
    }
}


 $(".modal-body .close").click(function(){
    $('.modal').find('video').get(0).pause();
});

// Counter js
jQuery(window).scroll(startCounter);
    function startCounter() {
        var hT = jQuery('.love_counter').offset().top,
            hH = jQuery('.love_counter').outerHeight(),
            wH = jQuery(window).height();
        if (jQuery(window).scrollTop() > hT+hH-wH) {
            jQuery(window).off("scroll", startCounter);
            jQuery('.love_count').each(function () {
                var $this = jQuery(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    } 