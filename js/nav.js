$(document).ready(function(){
	$("#nav_root li.first")
		.mouseenter(function (){
			$(this).find("ul")
				.css("opacity", 0)
				.css("visibility", "visible")
				.animate({opacity: 1}, 500);
		})
		.mouseleave(function (){
			$(this).find("ul").css("visibility", "hidden");
		});
});