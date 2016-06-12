/* 百叶窗 */
var DELAY = 1000;
var SLEEP = 5000;
var mTimer;
var mStoping = false;

$(document).ready(function(){
	var slideArea = $("#banner_slider");
	mContainer = $("#sliders");
	mItemWidth = slideArea.width(); // 单个控件宽度
	// 切换按钮
	$("#btnLeft").click(toRight);
	$("#btnRight").click(toLeft);
	// 按键
	$(document).keydown(function (event){
		if (event.which == 37) 
			toRight();
		else if(event.which == 39)
			toLeft();
	});
	slideArea.bind("mouseenter", function(){
			mStoping = true;
			clearTimeout(mTimer);
		});
	slideArea.bind("mouseleave", function(){
			mStoping = false;
			resetTimer();
		});
	setTimeout(slideLoop, DELAY + SLEEP);
});

function resetTimer(){
	if (mStoping)
		return;
	clearTimeout(mTimer);
	mTimer = setTimeout(slideLoop, DELAY + SLEEP);
}

function slideLoop(){
	toLeft();
	resetTimer();
}

function toLeft(){
	var active = mContainer.find(".slide").first();
	if(active.is(":animated"))
		return;
	active.animate({marginLeft:-mItemWidth}, DELAY, function (){
			active.appendTo(mContainer);
			active.css("marginLeft", 0);
		});
	resetTimer();
}

function toRight(){
	var slides = mContainer.find(".slide");
	if(slides.first().is(":animated"))
		return;
	var active = slides.last();
	active.prependTo(mContainer);
	active.css("marginLeft", -mItemWidth);
	active.animate({marginLeft:0}, DELAY);
	resetTimer();
}