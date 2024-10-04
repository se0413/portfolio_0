$(document).ready(function(){
   
    let scrolling
    let scroll_top //header 고정 시작 값
    let window_w
    let mobile_size = 1024
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

   
   
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).removeClass('on')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).removeClass('on')
    })

    $('header .gnb .gnb_wrap .depth1 > li > a ').on('click', function(e){
        if(pc_mobile == 'mobile'){ 
            e.preventDefault(); 
            $(this).parent().toggleClass('open')
        }
    })

    $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
        //스크롤금지
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
        //스크롤금지 해제
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    $('.show_event .se_borad ul li').on('mouseover', function(){
        $('.show_event .se_borad ul li').removeClass('on')
        $(this).addClass('on')
    })
    $('.show_event .se_borad ul li').on('mouseleave', function(){
        $('.show_event .se_borad ul li').removeClass('on')
        $(this).removeClass('on')
    })

    $('.theme .theme_cnt ul li ').on('mouseover', function(){
        $('.theme .theme_cnt ul li ').removeClass('on')
        $(this).addClass('on')
    })
    $('.theme .theme_cnt ul li ').on('mouseleave', function(){
        $('.theme .theme_cnt ul li ').removeClass('on')
        $(this).removeClass('on')
    })

    $('footer .familly_site button.familly_open').on('click', function(){
        $('footer .familly_site').addClass('on')
        $('footer .familly_site ul').slideDown()
    })
    $('footer .familly_site button.familly_close').on('click', function(){
        $('footer .familly_site').removeClass('on')
        $('footer .familly_site ul').slideUp()
    })
})