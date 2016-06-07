$(document).ready(function() {

	$('.button_about').click(function() {
		$.scrollTo($('#about'), 1500);
	});

	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    var s = skrollr.init({
		    forceHeight: false,
		    smoothScrolling: false
		});
	}
	
	

});




