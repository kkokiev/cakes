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
			$(this).children('.sub-menu').addClass("open");
		}
	});

	$menuItemWithSubmenu.on('mouseleave focusout', function() {
		if ($(window).width() > 900) {
			$(this).children('.sub-menu').removeClass('open');
		}
	});

	// //add button for show/hide sub-menu on mobile
	$('.menu-dropdown-icon > a').append("<span href=\"#\" class=\"menu-mobile-icon\"><span></span><span></span><span></span></span>");

	// //setup show and hide .sub-menu on width < 1100
	$('.menu-mobile-icon').on('click', function(e) {
		e.preventDefault();
		$(this).parent().next().toggleClass('open');
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


})(jQuery);
