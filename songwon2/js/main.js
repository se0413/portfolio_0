$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { 

		effect: "fade",
	
		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},
	
		loop: true, 
	
		pagination: {  
			el: '.swiper-pagination', 
			clickable: true,  
			renderBullet: function (index, className) {  
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	
	});
	$('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  
	})
   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start(); 
    })

	const bookmark_swiper = new Swiper('.bookmark .swiper', { 
        spaceBetween: 16,
        breakpoints: {
            1400: {  
                slidesPerView: 7,
			    spaceBetween: 10,
            },
            1070: {  
                slidesPerView: 5,
			    spaceBetween: 5,
            },
        },
        centeredSlides: false, 
        loop: false,  
        navigation: {
            nextEl: '.swiper .btn_next',
            prevEl: '.swiper .btn_prev',
        },
    });
})