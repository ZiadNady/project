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
    on: {
        slideChange: function () {
            var videos = document.querySelectorAll('.video-slide');
            videos.forEach(video => {
                video.pause();
            });

            var activeSlide = swiper.slides[swiper.activeIndex];
            var activeVideo = activeSlide.querySelector('.video-slide');

            if (activeVideo) {
                activeVideo.play();
            }
        }
    }   
});

var swiper = new Swiper(".what_is_happening_section .mySwiper", {
    slidesPerView: 4.5,
    scrollbar: {
        el: ".what_is_happening_section .swiper-scrollbar",
        hide: true,
    },
});

