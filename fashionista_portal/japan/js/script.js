$(document).ready(function(){
	$('.icon-menu').click(function(){
		$('.page').css({
			'position':'relative',
			'right':'-240px'
		})
		$('.sidebar-navigation').css({
			'left':0
		})
	})
	$('.close-btn').click(function(){
		$('.page').css({
			'position':'relative',
			'right':'0'
		})
		$('.sidebar-navigation').css({
			'left':'-240px'
		})
	})

	$('.slide-fashion').slick({
		autoplay: true,
		nextArrow: '<i class="el el-arrow-right right-btn hidden-xs"></i> ',
		prevArrow: '<i class="el el-arrow-left left-btn hidden-xs"></i>',
	})

	$('.slick-navigation').slick({
		nextArrow: '<i class="fa fa-arrow-circle-right nav-btn right-btn-nav"></i> ',
		prevArrow: '<i class="fa fa-arrow-circle-left nav-btn left-btn-nav"></i>',
	}).on('afterChange',function(event, slick, currentSlide, nextSlide){
		var name = $(slick.$slides.get(currentSlide)).data('name');
		$('.section-banner img').fadeOut();
		$(name).fadeIn();
	});

	var he = parseInt($('.section-banner img:first').height());
	$('.section-banner').height(he);
	$('.second-navigation li a').click(function(e){
		e.preventDefault();
		$('.second-navigation li').removeClass('active');
		$(this).parent().addClass('active');
		var name = $(this).data('name');
		$('.section-banner img').fadeOut();
		$(name).fadeIn();
	});

})
