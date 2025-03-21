$(document).ready(function(){
	
	let menuName = $('.header') 
	let menuItem = $('.header ul li') 
	let sectionName
	let moveTop
	let areaTop
	let areaH
	let areaName
	let scrollTop

	menuItem.on('click', function(){
		sectionName = $(this).attr('data-link')
		moveTop = $('*[data-menu="'+sectionName+'"]').offset().top
		$('html, body').animate({
			scrollTop : moveTop
		}, 500)
	})
	menuChk()
	$(window).scroll(function(){
		menuChk()
	})
	function menuChk(){
		scrollTop = $(window).scrollTop()
		$.each($('*[data-menu]'), function(idx, item){
			areaTop = $('*[data-menu]').eq(idx).offset().top
			areaH = $('*[data-menu]').eq(idx).height()
			areaName = $('*[data-menu]').eq(idx).attr('data-menu')
			if((scrollTop >= areaTop) && (scrollTop < areaTop + areaH)){
				menuItem.removeClass('active')
				menuItem.siblings('[data-link="'+areaName+'"]').addClass('active')
			}else if(scrollTop < $('*[data-menu]').first().offset().top){
				menuItem.removeClass('active')
			}else if(scrollTop > $('*[data-menu]').last().offset().top + $('*[data-menu]').last().height()){
				menuItem.removeClass('active')
			}
		});
	}

	let tab_btn = $('.web .tap_area .tap_btn ul li') 
    let tab_name
    let tab_cnt = $('.web .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt_prant = $('.web .tap_area .tap_cnt')

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

	let tab_btn2 = $('.another .tap_area .tap_btn ul li') 
    let tab_name2
    let tab_cnt2 = $('.another .tap_area .tap_cnt div[role="tabpanel"]')
    let tab_cnt2_prant = $('.another .tap_area .tap_cnt')

    tab_btn2.on('click', function(){
        tab_btn2.removeClass('active')
        $(this).addClass('active')

        tab_btn2.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')

        tab_name2 = $(this).attr('aria-controls')
        tab_name2 = '#'+ tab_name2
        console.log(tab_name2)

        tab_cnt2.removeClass('active')
        tab_cnt2_prant.find(tab_name2).addClass('active')
        
    })

	$(window).on('scroll mousemove', function(e){ 
		$('.cursor').css('left', e.pageX + 'px');
		$('.cursor').css('top', e.pageY + 'px');
	});
	$('a').hover(function(){
		$('.cursor').toggleClass('on');
	});

	$('.another .a_box .tap_area .tap_cnt .popup_d .tabborad2 .list2 .more a').on('click', function(){
		$('.popup').show()
	})
	$('.popup .popup_photo .btn_close').on('click', function(){
		$('.popup').hide()
	})

})
