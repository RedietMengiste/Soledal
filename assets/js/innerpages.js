$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ testimonials slider -----------
    var swiper = new Swiper('.tc-testimonials-st5 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: true,
        parallax: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st5 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonials-st5 .swiper-button-next',
            prevEl: '.tc-testimonials-st5 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ testimonials slider 6 -----------
    var swiper = new Swiper('.tc-testimonials-st6 .testi-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-testimonials-st6 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonials-st6 .swiper-button-next',
            prevEl: '.tc-testimonials-st6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

});



// ------------ gsap scripts -----------
$(function () {
    

    if (window.innerWidth > 991) {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".tc-sin-project-st9 .sub-info .info",
                start: "-100 top",
                endTrigger: ".sub-info",
                end: "bottom bottom",
                pin: true, 
                pinSpacing: false
            }
        });

    }


});
