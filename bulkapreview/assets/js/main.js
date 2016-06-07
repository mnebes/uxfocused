$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
       

   $("#progress").width(scrollPercent + '%');

});


// Init Skrollr
if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	var s = skrollr.init({
		forceHeight: false
	});
	// Refresh Skrollr after resizing our sections
	s.refresh($('.divide'));
}
 

