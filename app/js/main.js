//Slide
new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.arrow__right',
		prevEl: '.arrow__left',

	},

	pagination: {
		el: '.benefits__slider-counter',
		type: 'fraction'
	},

	slidesPerView: 1,
	loop: true,
})

//Fixed header
const scrollMenu = function (e) {
	let element = document.querySelector(".header");
	let scrollTop = window.scrollY;

	if (scrollTop > 50) {
		element.classList.add("active");
	} else {
		element.classList.remove("active");
	}
};

document.addEventListener("scroll", scrollMenu);


//Burger menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})