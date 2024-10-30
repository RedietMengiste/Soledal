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


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-header-st1 .header-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: "vertical",
        centeredSlides: true,
        parallax: true,
        speed: 1500,
        pagination: {
            el: '.tc-header-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-header-st1 .swiper-button-next',
            prevEl: '.tc-header-st1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".bg-img")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.height,
                        });
                }
            },
            resize: function () {
                this.update();
            },
        },
    });

    // ------------ portfolio slider1 -----------
    const fraction = document.getElementById("worksFraction");
    const slides = document.querySelectorAll(".tc-portfolio-st1 .swiper-slide");
    const slideCount = slides.length;
    fraction.textContent = `1 / ${slideCount}`;

    var swiper = new Swiper('.tc-portfolio-st1 .portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 100,
        centeredSlides: true,
        speed: 1500,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        pagination: {
            el: '.tc-portfolio-st1 .swiper-pagination',
            type: 'progressbar',
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        on: {
            slideChange: function () {
                fraction.innerHTML = `<span class="current">${this.realIndex + 1}</span> <span>/</span> <span>${slideCount}</span>`;
            }
        }
    });


    // ------------ team slider1 -----------
    var swiper = new Swiper('.tc-team-st1 .team-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-team-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-team-st1 .swiper-button-next',
            prevEl: '.tc-team-st1 .swiper-button-prev',
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
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ testimonials slider -----------
    var swiper = new Swiper('.tc-testimonials-st1 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 50,
        direction: "vertical",
        centeredSlides: true,
        parallax: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-testimonials-st1 .swiper-button-next',
            prevEl: '.tc-testimonials-st1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


});



// ------------ gsap scripts -----------
$(function () {

});
