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

	/*
	*
	* setup .menu
	*
	*/

	var $menu = $('.menu'),
		$menuItem = $('.menu>li'),
		$menuItemWithSubmenu = $('.menu>li:has( > .sub-menu)');

	//add special class to menu item what has dropdown
	$menuItemWithSubmenu.addClass('menu-dropdown-icon');

	//show and hide .sub-menu on width > 900
	$menuItemWithSubmenu.on('mouseenter focusin', function() {
		if ($(window).width() > 900) {
			$(this).children('.sub-menu').stop().addClass("js-open").slideDown();
		}
	});

	$menuItemWithSubmenu.on('mouseleave focusout', function() {
		if ($(window).width() > 900) {
			$(this).children('.sub-menu').stop().removeClass('js-open').slideUp();
		}
	});

	// //add button for show/hide sub-menu on mobile
	$('.menu-dropdown-icon > a').append("<span href=\"#\" class=\"menu-mobile-icon\"><span></span><span></span><span></span></span>");

	// //setup show and hide .sub-menu on width < 1100
	$('.menu-mobile-icon').on('click', function(e) {
		e.preventDefault();
		// $(this).parent().next().toggleClass('open');
		if($(this).parent().next().hasClass('js-open')) {
			$(this).parent().next().removeClass('js-open').slideUp();
		} else {
			$(this).parent().next().addClass('js-open').slideDown();
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

	$navBtn.on('click', function(event) {
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


		$searchBtnOpen.on('click', function(event) {
			event.preventDefault();
			$(this).css('display', 'none');
			$searchBtnClose.css('display', 'inline-block');
			$searchWrap.slideDown();
		});

		$searchBtnClose.on('click', function(event) {
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

	$('.advertiser-header__img-body').on('click', function(event) {
		event.preventDefault();
		$(this).next().fadeIn();
	});

	$('.js-advertiser-header-close-modal-btn').on('click', function(event) {
		event.preventDefault();
		$('.advertiser-header__img-modal').fadeOut();
	});

	$('.advertiser-header__img-modal').on('click', function(event) {
		event.preventDefault();
		$(this).fadeOut();
	});

	$('.advertiser-header__img-modal-body').on('click', function(event) {
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
	$('.advertiser-header__contact-form-btn').on('click', function(event) {
		event.preventDefault();
		$(this).next().fadeIn();
	});

	$('.js-close-modal-contact-btn').on('click', function(event) {
		event.preventDefault();
		$('.modal-contact').fadeOut();
	});

	$('.modal-contact').on('click', function(event) {
		event.preventDefault();
		$(this).fadeOut();
	});

	$('.modal-contact__body').on('click', function(event) {
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

	var swiper = new Swiper('.advertiser-slider__slider', {
		pagination: '.swiper-pagination',
		slidesPerView: 6,
		paginationClickable: true,
		nextButton: '#slide-next',
		prevButton: '#slide-prev',
		spaceBetween: 10,
		loop: true,
		breakpoints: {
			1024:{
				slidesPerView: 5,
				spaceBetween: 10
			},
			880: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			740: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});


	$('.advertiser-slider').find('.swiper-slide').on('click', function(){
		var $slideIndex = $(this).attr('data-swiper-slide-index'),
			$slideIndex = parseInt($slideIndex),
			$imgIndex = $slideIndex + 1;

		$('.popup-slider__img-wrap img').hide();
		$('.popup-slider__img-wrap img:nth-child('+ $imgIndex +')').show();
		$popupSlider.addClass('popup-slider_opened');
	});

	$popupSlider.on('click', function() {
		$(this).removeClass('popup-slider_opened');
	});

	$popupSlider.find('img').on('click', function(event) {
		event.stopPropagation();
	});

	$('.js-close-popup-slider-btn').on('click', function(event) {
		event.preventDefault();
		$popupSlider.removeClass('popup-slider_opened');
	});

	/*
	*
	*setup advertiser slider and popup img
	*
	*/


})(jQuery);

