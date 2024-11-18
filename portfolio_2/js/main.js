$(document).ready(function(){
	const myFullpage = new fullpage('#fullpage', {  

		navigation: true, 
		navigationPosition: 'left', 
		navigationTooltips: ['MAIN', 'I AM', 'PROJECT1', 'PROJECT12','PROJECT13','PROJECT4','CARD NEWS','EMOTICON','DRAW','FINISH'], 
		showActiveTooltip: true, 
		
		lockAnchors: true,
		anchors: ['link1', 'link2', 'link3', 'link4', 'link5', 'link6', 'link7', 'link8', 'link9'], 

		autoScrolling:true, 
		scrollHorizontally: true,

		verticalCentered: true, 
		
		scrollOverflow: false, 

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 1){
				$('#fp-nav').addClass('w')
			}else{
				$('#fp-nav').removeClass('w')
			}
		},

		responsiveWidth: 640 
	});

	$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		$('.cursor').css('left', e.pageX + 'px');
		$('.cursor').css('top', e.pageY + 'px');
	});
	$('a').hover(function(){ /* a에 마우스를 올렸을때만 on 클래스 주기 */
		$('.cursor').toggleClass('on');
	});
})