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
})