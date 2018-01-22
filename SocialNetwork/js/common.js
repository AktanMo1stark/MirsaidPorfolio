$(document).ready(function () {
	 $('#a').scrollToFixed();
	 $('.skillbar').each(function () {
			 $(this).find('.skillbar-bar').animate({
				 width:$(this).attr('data-percent')
			 } , 1000);
	 });
	 $('#a').onePageNav({
	 	currentClass: 'underline',
	 	changeHash: false,
	 	scrollSpeed: 750,
	 	scrollThreshold: 0.5,
	 	filter: '',
	 	easing: 'swing',
	 	begin: function() {
	 		//I get fired when the animation is starting
	 	},
	 	end: function() {
	 		//I get fired when the animation is ending
	 	},
	 	scrollChange: function($currentListItem) {
	 		//I get fired when you enter a section and I pass the list item of the section
	 	}
	 });
	 $("#read").click(function () {
 		$("body, html").animate({
 			scrollTop: 665
 		}, 800);
 		return false;
 	});
});
