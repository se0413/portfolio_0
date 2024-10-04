$(document).ready(function(){
   
    let scrolling
    let scroll_top 
    let window_w
    let mobile_size = 768
    let pc_mobile

    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 50
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
    }

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){ //pc 일때
            pc_mobile = 'pc'
        }else{ // mobile 일때
            pc_mobile = 'mobile'
        }
    }
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk() 
    $(window).scroll(function(){
        scroll_chk() 
    })

	$('header .gnb .btn_open').on('click focusin', function(){
		$('header').addClass('menu_open')
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('.gnb_wrap').on('scroll touchmove mousewheel', function(event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
	})
    $('header .gnb .btn_close').on('click focusout', function(){
		$('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
	})

    $('footer .famillysite button.btn_open').on('click', function(){
        $('footer .famillysite').addClass('on')
        $('footer .famillysite ul').slideDown()
    })
    $('footer .famillysite button.btn_close').on('click', function(){
        $('footer .famillysite').removeClass('on')
        $('footer .famillysite ul').slideUp()
    })

    $('.quick button').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        },500)
    })

    $(window).on('scroll mousemove', function(e){  
        $('.cursor').css('left', e.pageX + 'px');
        $('.cursor').css('top', e.pageY + 'px');
    });
    $('a').hover(function(){ 
        $('.cursor').toggleClass('on');
    });
})