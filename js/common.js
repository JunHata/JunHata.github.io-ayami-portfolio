$(function() {

    $(".glass-header__hum-menu").click(function() {
        $(this).toggleClass('active');
    });

    $(".glass-header__hum-menu").click(function() {
        if($(this).hasClass("active")) {
            $(".main-nav-sp").addClass("menu-show");
            $(".menu-show-bg").addClass("bg-white");
        } else {
            $(".main-nav-sp").removeClass("menu-show");
            $(".menu-show-bg").removeClass("bg-white");
        }
    });

    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();

        $(".service-box__card").each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 200) {
                $(this).addClass("js-fadeInUp");
            }
        });
    });

    $(".main-box__top-img1").slick({
        autoplay: true,
        fade: true,
        speed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        arrows: false
    });

    $(".main-box__top-img2").slick({
        autoplay: true,
        fade: true,
        speed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        arrows: false
    });

})