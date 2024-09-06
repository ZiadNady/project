function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

var swiper = new Swiper(".full-screen-swiper .mySwiper", {
    
    breakpoints: {
        768: {
            scrollbar: {
                el: ".full-screen-swiper .swiper-scrollbar",
                hide: true,
            },
        },
        0: {
            pagination: {
                el: ".full-screen-swiper .swiper-pagination",
            }
        }
    }
});

var swiper = new Swiper(".what_is_happening_section .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    scrollbar: {
        el: ".what_is_happening_section .swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});


var swiper = new Swiper(".things_to_do_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper('.stories_and_insights_section .swiper-container', {
    slidesPerView: 3, // Show half of the side slides
    centeredSlides: true, // Start from the middle slide
    spaceBetween: 20, 
    breakpoints: {
        768: {
            slidesPerView: 3, // Adjust for mobile view
            centeredSlides: false, // Adjust for mobile view
            spaceBetween: 0,
        },
        0: {
            slidesPerView: 1, // Adjust for mobile view
        }
    }
});


var swiper = new Swiper(".Know_destinations_section .mySwiper", {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 2,
    spaceBetween: 20,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            direction: 'horizontal',
        },
        1024: {
            slidesPerView: 3,
            direction: 'vertical',
        }
    }
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
