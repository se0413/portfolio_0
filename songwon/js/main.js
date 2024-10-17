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

	let tab_btn = $('.notice .tap_area .tap_btn ul li') /*변수 이름을 정해줌*/
    let tab_name
    let tab_cnt = $('.notice .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt_prant = $('.notice .tap_area .tap_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')

        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')

        tab_name = $(this).attr('aria-controls')
        tab_name = '#'+ tab_name /*id 클래스를 추가로 삽입*/
        console.log(tab_name)

        tab_cnt.removeClass('active')
        tab_cnt_prant.find(tab_name).addClass('active')
        
     })
})