$(document).ready(function(){
	$(".readmore div")
		.mouseover(function (){
			$(this)
				.stop(true, true)
				.animate({opacity: 0.7}, 500);
		})
		.mouseout(function (){
			$(this)
				.animate({opacity: 0}, 500);
		});
});