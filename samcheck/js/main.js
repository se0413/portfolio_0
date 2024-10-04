$(document).ready(function(){
    const popup_swiper = new Swiper('.popup .swiper', { 

        autoplay: { 
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true, 

        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
            type: 'fraction',  
            renderBullet: function (index, className) {   
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },


        navigation: {  
            nextEl: '.swiper .btn_next', 
            prevEl: '.swiper .btn_prev',  
        },

    });

    const tap_cnt_swiper = new Swiper('.tap_cnt .swiper', { 
        spaceBetween: 16, 
        breakpoints: {
            640: {  
                spaceBetween: 30, 
                slidesPerView: 3,

            },
            1024: {
                spaceBetween: 24,
                slidesPerView: 4,

            },
            1300: {
                spaceBetween: 24,
                slidesPerView: 4,

            },
        },
        centeredSlides: false, 
        loop: true,  
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
    });
    const banner_cnt_swiper = new Swiper('.banner .swiper', { 
        spaceBetween: 16, 
        breakpoints: {
            640: {  
                spaceBetween: 30, 
                slidesPerView: 4,

            },
            1024: {
                spaceBetween: 40,
                slidesPerView: 6,

            },
            1300: {
                spaceBetween: 40,
                slidesPerView: 6,

            },
        },
        centeredSlides: false, 
        loop: true,  
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
    });
})