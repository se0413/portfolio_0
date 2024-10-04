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


    $('header_sub').on('mouseenter focusin', function(){
        $(this).addClass('fixed')
    })
    $('header_sub').on('mouseleave', function(){
        //마우스를 아웃했을때 fixed 클래스를 삭제하는 건 맨 상단에 있을때만 가능
        if(scrolling <= 0){
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }   
        // console.log(scrolling)
    }
    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
            $('.header_sub').addClass('menu_over')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child > a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).removeClass('on')
            $('.header_sub').removeClass('menu_over')
        }
    })

    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });

    $('footer .famillysite .f1').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(1)').addClass('on')
    })
    $('footer .famillysite .f5').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(1)').removeClass('on')
    })
    $('footer .famillysite .f2').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(2)').addClass('on')
    })
    $('footer .famillysite .f6').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(2)').removeClass('on')
    })
    $('footer .famillysite .f3').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(3)').addClass('on')
    })
    $('footer .famillysite .f7').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(3)').removeClass('on')
    })
    $('footer .famillysite .f4').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(4)').addClass('on')
    })
    $('footer .famillysite .f8').on('click', function(){
        $('footer .famillysite .f_inner > li:nth-child(4)').removeClass('on')
    })
})