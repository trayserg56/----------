// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	// SliderFor
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	  });
	// SliderFor
	// Swiper
	var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
	// Swiper
	$('.header__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// asNavFor: '.slider-for',
		dots: false,
		// arrows: true,
		// appendArrows: $(".arrovsprojects"),
		// prevArrow: '<div class="ArrowPrev"></div>',
		// nextArrow: '<div class="ArrowNext"></div>',
	});



	$('.popular__items').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		infinite: false,
		appendArrows: $(".arrovsprojects"),
		prevArrow: '<div class="ArrowPrev"></div>',
		nextArrow: '<div class="ArrowNext"></div>',
		responsive: [
			{
				breakpoint: 1480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
			breakpoint: 630,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});




	// Аккардеон
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		/* Переключение между добавлением и удалением класса "active",
		чтобы выделить кнопку, управляющую панелью */
		this.classList.toggle("active");

		/* Переключение между скрытием и отображением активной панели */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
		panel.style.display = "none";
		} else {
		panel.style.display = "block";
		}
	});
	}
	// Аккардеон

	// PriceRange
	const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
	let priceGap = 1000;

	priceInput.forEach(input =>{
		input.addEventListener("input", e =>{
			let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

			if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
				if(e.target.className === "input-min"){
					rangeInput[0].value = minPrice;
					range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
				}else{
					rangeInput[1].value = maxPrice;
					range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
				}
			}
		});
	});

	rangeInput.forEach(input =>{
		input.addEventListener("input", e =>{
			let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);

			if((maxVal - minVal) < priceGap){
				if(e.target.className === "range-min"){
					rangeInput[0].value = maxVal - priceGap
				}else{
					rangeInput[1].value = minVal + priceGap;
				}
			}else{
				priceInput[0].value = minVal;
				priceInput[1].value = maxVal;
				range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
				range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		});
	});
		// PriceRange
$(".category__filters__manufacturer__item").click(function(){
	$(".category__filters__manufacturer__item__back").addClass("category__filters__manufacturer__item__active");
});
$("#settings-btn").click(function(){
	$(".category__filters").toggleClass("category__filters__open");
});
$("#defFilters-btn").click(function(){
	$(".category__filters").removeClass("category__filters__open");
});
$("#addFilters-btn").click(function(){
	$(".category__filters").removeClass("category__filters__open");
});
$("#filter__close").click(function(){
	$(".category__filters").removeClass("category__filters__open");
});

$("#burger-btn").click(function(){
	$(".menu__list").toggleClass("menu__opened");
});
})
