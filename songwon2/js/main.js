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
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            1400: {  
                slidesPerView: 7,
			    spaceBetween: 10,
            },
            1000: {  
                slidesPerView: 5,
			    spaceBetween: 10,
            },
            600: {  
                slidesPerView: 4,
			    spaceBetween: 10,
            },
            480: {  
                slidesPerView: 3,
			    spaceBetween: 10,
            },
        },
        centeredSlides: false, 
        loop: false,  
        navigation: {
            nextEl: '.tit_txt .btn_next',
            prevEl: '.tit_txt .btn_prev',
        },
    });

    let tab_btn = $('.board1 .tap_area .tap_btn ul li') 
    let tab_name
    let tab_cnt = $('.board1 .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt_prant = $('.board1 .tap_area .tap_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')

        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')

        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+ tab_name
        console.log(tab_name)

        tab_cnt.removeClass('active')
        tab_cnt_prant.find(tab_name).addClass('active')
        
     })

    $('.board1 .calendar .c_sub .days li').on('click', function(){
        $('.board1 .calendar .c_sub .days li').removeClass('active')
        $(this).addClass('active')  
    })

})