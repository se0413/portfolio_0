$(document).ready(function(){

	const myFullpage = new fullpage('#fullpage', {  

		navigation: true, 
		navigationPosition: 'left', 
		navigationTooltips: ['COEX', 'INFORMATION', 'Show & Event', 'Stamp Zone', 'Photo review', 'Theme Zone', 'Location'], /* 툴팁 */
		showActiveTooltip: true, 

		autoScrolling:true, 
		scrollHorizontally: true,

		verticalCentered: true, 
		scrollOverflow: false, 

		afterLoad: function(origin, destination, direction, trigger){
			
		},

		responsiveWidth: 1025
	});

	const visual_swiper = new Swiper('.visual .swiper', { 

		autoplay: { 
			delay: 5000,
			disableOnInteraction: true,
		},
		effect: "fade", 
		loop: true,  

		pagination: {  
			el: '.visual .paging', 
			clickable: true, 
			renderBullet: function (index, className) {   
				return '<div class="item '+className+'"><span class="txt' + (index + 1) + '"></span></div>';
			},
		},

	});

	$('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  
   })

   $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start(); 
    })

	const photo_review_swiper = new Swiper('.photo_review .swiper', { 
		slidesPerView: 2, 
		spaceBetween: 16, 
		breakpoints: {

			1024: {  
				slidesPerView: 2,
				spaceBetween: 24, 
			},
			1260: { 
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1600: { 
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		loop: true,  
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
	});

})