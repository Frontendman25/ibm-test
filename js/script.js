$(function(){
	var imgBigBg = $('.imgsBg');
	var imgArrowLink = $('.imgs__arrowLink');
	var imgClose = $('.imgs__close');
	var imgBig = $('.imgs__img_big');
	var imgsImg = $('.imgs__img');
	
	imgsImg.on('click', function(e){
		var src = $(this).attr('src');
		imgClose.css({
			display: 'block'
		});
		imgArrowLink.css({
			display: 'block'
		});
		imgBig.css({
			display: 'block'
		});
		imgBigBg.css({
			display: 'block'
		});
		imgBig.attr('src', src);
	});
	
	$('.imgs__arrowLink_left').on('click', function(e){
		e.preventDefault();
		fun(imgBig.src);
	});
	
	$('.imgs__close').on('click', function(e){
		imgClose.css({
			display: 'none'
		});
		imgArrowLink.css({
			display: 'none'
		});
		imgBig.css({
			display: 'none'
		});
		imgBigBg.css({
			display: 'none'
		});
	});

	function fun(){
		imgsImg.on('click', function(e){
			var self = $(this);
			var currentSrc = $(this).attr('src');
			var prev = $(this).prev().attr('src');
			imgBig.attr('src', prev);
		});
	}
	

	$('.gamburger i').on('click', function(e){
		$('.menuWrap').animate({
			right: 0
		}, 400);
	});
	
	$('.menuWrap__icon').on('click', function(e){
		$('.menuWrap').animate({
			right: '-300'
		}, 400);
	});
});