(function ($) {
    $(function () {
    	new WOW().init();

    	var scene = $('.about-paralax').get(0);
		var parallaxInstance = new Parallax(scene);

    	 $('.slider-left').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  dots: false,
		  fade: true,
		  asNavFor: '.slider-right',
		  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});

		$('.slider-right').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.slider-left',
		  dots: true,
		  arrows: false
		});

		$('.printers-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  arrows: true,
		  fade: true,
		  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});


    });

})(jQuery);

