$(document).ready(function(){
	
  // About Animation
	$(window).scroll(function() {
		let getscroll = $(window).scrollTop();

		if (getscroll >= 500) {
			$('.about-txts').addClass('fromlefts');
			$('.about-pics').addClass('fromrights');
		} else {
			$('.about-txts').removeClass('fromlefts');
			$('.about-pics').removeClass('fromrights');
		}



		
	})
	$('#videos').click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var getvideourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src", getvideourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src", getvideosrc);
		})

		
	})

 // Pricing
 	$(window).scroll(function() {
 		let getscroll = $(window).scrollTop();
 
 		if (getscroll >= 2450) {
 			$('.cardones').addClass('movefromlefts');
 			$('.cardtwos').addClass('movefrombottoms');
 			$('.cardthrees').addClass('movefromrights');
 		} else {
 			$('.cardones').removeClass('movefromlefts');
 			$('.cardtwos').removeClass('movefrombottoms');
 			$('.cardthrees').removeClass('movefromrights');
 		}
 	})

 	 $('#accordion').accordion();

 	 $('#year').text(new Date().getFullYear());

 // progress box
 	 $(window).scroll(function() {
 	 	var getprogress = $('#progress')
 	 	var getprogressval = $('#progressvalues');
 	 	var getscroll = $(this).scrollTop();

 	 	var getscrollheight = $(document).height();
 	 	var getclientheight = $(window).height();
 	 	var calcheight = getscrollheight - getclientheight;
 	 	var getfinalheight = Math.round(getscroll * 100 / calcheight);
 	 	getprogressval.text(`${getfinalheight}%`);
 	 	getprogress.css({
 	 		background: `conic-gradient(steelblue ${getfinalheight}% ,#eee ${getfinalheight}%)`
 	 	})
 	 })




	$('#lightslider').lightSlider({
		auto:true,
		item:3,
		slideMove:2,
		speed:600,
	});

})