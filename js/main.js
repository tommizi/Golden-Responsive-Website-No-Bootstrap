$(document).ready(function(){
  
$('#menu').slicknav();
$('.wmg-container').WMGridfolio();
var nav = $('header nav');

	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if (scroll >=300){
			nav.removeClass('normal').addClass('efecto');
		}else{
			nav.removeClass('efecto').addClass('normal');
		}
	});

	/**distancia menu**/
    var distancia=$('header nav').offset();

    if (distancia.top > 0){
    	nav.removeClass('normal').addClass('efecto');
    }
    /****efectos animate.css**/
    $('.lema .anima1').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('.lema .anima2').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});

	$('#services .service.anima1').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('#services .service.anima2').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('#services .service.anima3').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('.event.anima1').waypoint(function(){
			$(this.element).addClass('animated fadeInLeft');
	},{
		offset:'60%'
	});
	$('.event.anima2').waypoint(function(){
			$(this.element).addClass('animated fadeInRight');
	},{
		offset:'60%'
	});
	$('.event.anima3').waypoint(function(){
			$(this.element).addClass('animated fadeInLeft');
	},{
		offset:'60%'
	});
	$('.event.anima4').waypoint(function(){
			$(this.element).addClass('animated fadeInRight');
	},{
		offset:'60%'
	});
	$('.event.anima5').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});

	$('.miembro.anima1').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('.miembro.anima2').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('.miembro.anima3').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});

	$('#logos .anima1').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('#logos .anima2').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('#logos .anima3').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
	$('#logos .anima4').waypoint(function(){
			$(this.element).addClass('animated fadeInUp');
	},{
		offset:'60%'
	});
});
smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( toggle, anchor ) {} // Function to run after scrolling
});