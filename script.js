function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

var swiper = new Swiper(".full-screen-swiper .mySwiper", {
    scrollbar: {
        el: ".full-screen-swiper .swiper-scrollbar",
        hide: true,
    }, 
});

var swiper = new Swiper(".what_is_happening_section .mySwiper", {
    slidesPerView: 4.5,
    scrollbar: {
        el: ".what_is_happening_section .swiper-scrollbar",
        hide: true,
    },
});

var swiper = new Swiper(".things_to_do_section .mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    scrollbar: {
        el: ".things_to_do_section .swiper-scrollbar",
        hide: true,
    },
});

var swiper = new Swiper(".Know_destinations_section .mySwiper", {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 2,
    mousewheel: true,
});

window.onscroll = function () {
    var header = $(".page-header");
    console.log(header);
    if (window.pageYOffset > (window.innerHeight * 0.2)) {
        header.css('background-color', 'white');
        $(".menu-item").css('color', 'black');
        $(".nav-button").css('color', 'black');
        $(".logo").css('color', 'black');
        $(".login").css('color', 'white');
        $(".login").css('background-color', 'rgb(120, 0, 110)');
    }else {
        header.css('background-color', 'black');
        $(".menu-item").css('color', 'white');
        $(".nav-button").css('color', 'white');
        $(".logo").css('color', 'white');
        $(".login").css('color', 'rgb(113, 113, 113)');
        $(".login").css('background-color', 'white');
    }
};
