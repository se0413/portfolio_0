$(document).ready(function(){
    let win_w 
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })



    $('header .header_sub').on('mouseenter', function(){
        if(pc_mobile == 'pc'){
            $('header .header_sub').removeClass('menu_over')
            $(this).addClass('menu_over')
        }
    })
    $('header .gnb .gnb_wrap .depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header .gnb .gnb_wrap .depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
        }
    })
    $('header .header_sub').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('menu_over')
        }
    })

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		
            $(this).parent().toggleClass('open')
        }
    });
    
    $('.quick .top').on('click', function(){
        $('html, body').animate({
            scrollTop:0
        },500)
    })

    $('footer .f_link .link1 button.btn_open').on('click', function(){
        $('footer .f_link .link1').addClass('open')
        $('footer .f_link .link1 ul').slideDown()
    })
    $('footer .f_link .link2 button.btn_open').on('click', function(){
        $('footer .f_link .link2').addClass('open')
        $('footer .f_link .link2 ul').slideDown()
    })
    $('footer .f_link .link3 button.btn_open').on('click', function(){
        $('footer .f_link .link3').addClass('open')
        $('footer .f_link .link3 ul').slideDown()
    })
    $('footer .f_link .link1 button.btn_close').on('click', function(){
        $('footer .f_link .link1').removeClass('open')
        $('footer .f_link .link1 ul').slideUp()
    })
    $('footer .f_link .link2 button.btn_close').on('click', function(){
        $('footer .f_link .link2').removeClass('open')
        $('footer .f_link .link2 ul').slideUp()
    })
    $('footer .f_link .link3 button.btn_close').on('click', function(){
        $('footer .f_link .link3').removeClass('open')
        $('footer .f_link .link3 ul').slideUp()
    })
})