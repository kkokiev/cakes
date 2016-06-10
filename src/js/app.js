//Common scripts


//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}


(function () {
	var $body = $('body');

	/*
	*
	* setup .menu
	*
	*/

	var $menuItemWithSubmenu = '.menu>li:has( > .sub-menu)';

	//add special class to menu item what has dropdown
	$('.menu>li:has( > .sub-menu)').addClass('menu-dropdown-icon');

	//show and hide .sub-menu on width > 900
	$body.on('mouseenter focusin', $menuItemWithSubmenu, function() {
		if ($(window).width() > 900) {
			$(this).children('.sub-menu').stop().addClass("js-open").slideDown();
		}
	});

	$body.on('mouseleave focusout', $menuItemWithSubmenu, function() {
		if ($(window).width() > 900) {
			$(this).children('.sub-menu').stop().removeClass('js-open').slideUp();
		}
	});

	// //add button for show/hide sub-menu on mobile
	$('.menu-dropdown-icon > a').append("<span href=\"#\" class=\"menu-mobile-icon\"><span></span><span></span><span></span></span>");

	// //setup show and hide .sub-menu on width < 1100
	$body.on('click', '.menu-mobile-icon', function(event) {
		event.preventDefault();

		if($('.sub-menu').hasClass('js-open')) {
			$('.sub-menu').removeClass('js-open').slideUp();
		} else {
			$('.sub-menu').addClass('js-open').slideDown();
		}
	});
	/*
	*
	* end setup .menu
	*
	*/


	/*
	*
	*Setup show/hide navbar for desktop width < 900px
	*
	*/
	var $navBtn = $('#mobile-btn'),
		$navBar = $('#navbar');

	$body.on('click', '#mobile-btn', function(event) {
		event.preventDefault();

		if( $navBar.hasClass('js-nav-open')) {
			$navBar.removeClass('js-nav-open').slideUp();
			$navBtn.removeClass('topline__mobile-btn_navigation-close');
		} else {
			$navBar.addClass('js-nav-open').slideDown();
			$navBtn.addClass('topline__mobile-btn_navigation-close');
		}

	});
	/*
	*
	* end setup .navbar
	*
	*/


	/*
	*
	*Setup show/hide .searchbar
	*
	*/
	var $searchBtnOpen = $('#search-open'),
		$searchBtnClose = $('#search-close'),
		$searchWrap = $('#search-wrap');


		$body.on('click', '#search-open', function(event) {
			event.preventDefault();
			$(this).css('display', 'none');
			$searchBtnClose.css('display', 'inline-block');
			$searchWrap.slideDown();
		});

		$body.on('click', '#search-close', function(event) {
			event.preventDefault();
			$(this).css('display', 'none');
			$searchBtnOpen.css('display', 'inline-block');
			$searchWrap.slideUp();
		});
	/*
	*
	* end setup show/hide .searchbar
	*
	*/


	/*
	*
	*setup image popup in search results
	*
	*/

	$body.on('click', '.js-advertiser-header-img-body', function(event) {
		event.preventDefault();
		$(this).next().fadeIn();
	});

	$body.on('click', '.js-advertiser-header-close-modal-btn', function(event) {
		event.preventDefault();
		$('.advertiser-header__img-modal').fadeOut();
	});

	$body.on('click', '.js-advertiser-header-img-modal', function(event) {
		event.preventDefault();
		$(this).fadeOut();
	});

	$body.on('click', '.js-advertiser-header-img-modal-body', function(event) {
		event.stopPropagation();
	});
	/*
	*
	*end setup image popup in search results
	*
	*/



	/*
	*
	*setup contact popup in search results
	*
	*/
	$body.on('click', '.js-contact-form-btn', function(event) {
		event.preventDefault();
		$(this).next().fadeIn();
	});

	$body.on('click', '.js-close-modal-contact-btn', function(event) {
		event.preventDefault();
		$('.modal-contact').fadeOut();
	});

	$body.on('click', '.js-modal-contact', function(event) {
		event.preventDefault();
		$(this).fadeOut();
	});

	$body.on('click', '.js-modal-contact-body', function(event) {
		event.stopPropagation();
	});
	/*
	*
	*end setup contact popup in search results
	*
	*/


	/*
	*
	*setup advertiser slider and popup img
	*
	*/
	var $popupSlider = $('.popup-slider');

	/*owl*/
	$('.owl-carousel.advertiser-slider__slider').owlCarousel({
		navContainer: '.advertiser-slider__wrap',
		nav: true,
		loop: true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},

			480: {
				items: 2
			},

			600: {
				items: 3
			},

			740: {
				items: 4
			},

			880: {
				items: 5
			},

			1024: {
				items: 6
			}
		}
	});
	/*owl end*/


	$body.on('click', '.advertiser-slider__slide', function(){
		var $imgSrc = $(this).find('img').attr('src');
		$('.popup-slider__img-wrap img').hide();
		$('.popup-slider__img-wrap img[src="' + $imgSrc + '"]').show();
		$popupSlider.addClass('popup-slider_opened');

	});

	$body.on('click', '.popup-slider', function() {
		$(this).removeClass('popup-slider_opened');
	});

	$body.on('click', '.popup-slider img', function(event) {
		event.stopPropagation();
	});

	$body.on('click', '.js-close-popup-slider-btn', function(event) {
		event.preventDefault();
		$popupSlider.removeClass('popup-slider_opened');
	});

	/*
	*
	*setup advertiser slider and popup img
	*
	*/


})(jQuery);
