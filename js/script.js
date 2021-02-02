$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
$('.slider').slick({
	arrow:true,
	dots:true,
	speed:1000,
	autoplay:true,
	autoplaySpeed:1800,
	responsive:[
		{
			breakpoint: 768,
			settings: {
				slidesToShow:1,
			}
		}
	]
});
});
