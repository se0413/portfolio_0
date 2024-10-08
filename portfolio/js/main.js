$(document).ready(function(){
	const myFullpage = new fullpage('#fullpage', {  

		navigation: true, 
		navigationPosition: 'left', 
		navigationTooltips: ['MAIN', 'I AM', 'PROJECT1', 'PROJECT12','PROJECT13','PROJECT4','EMOTICON','DRAW','FINISH'], 
		showActiveTooltip: true, 
		
		lockAnchors: true,
		anchors: ['link1', 'link2', 'link3', 'link4', 'link5', 'link6', 'link7', 'link8'], 

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
})