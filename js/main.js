$(function () {

	$('.filter-style').styler();

	$('.review__slider').slick({
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		arrows: true,
		speed: 600,
		arrows: true,
		prevArrow: '<button class="review__slider-btns review__slider-btnprev"><img src="../images/slider-arrow.svg" alt=""></button>',
		nextArrow: '<button class="review__slider-btns review__slider-btnnext"><img src="../images/slider-arrow.svg" alt=""></button>',
		responsive: [
		{
			breakpoint: 601,
			settings: {
				arrows: false,
			}
		}
		]
	});

	$('.gallery__slider').slick({
		autoplay: true,
		fade: true,
		autoplaySpeed: 5000,
		arrows: true,
		speed: 600,
		arrows: false,
		dots: true,
	});

	var scrollBottom = $(window).scrollTop() + $(window).height();

	$(window).scroll(function onScroll() {
		if (scrollBottom > 400) {
			var typed = new Typed('.header__quote-text', {
				strings: ["", "“Живи, чтобы серфить, серфи, чтобы жить”"],
				typeSpeed: 100,
				loop: false,
				smartBackspace: true,
			});
			$(window).off('scroll', onScroll);
		}
	});

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.header__menu').toggleClass('header__menu--active');
	});

});
var typed = new Typed('#typed-span', {
	strings: ["", "Surf"],
	typeSpeed: 300,
	loop: false,
	cursorChar: '',
});

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;

			let animItemPoint = window.innerHeight;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight;
			}


			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-one-play')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}