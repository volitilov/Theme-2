
$(document).ready(function() {
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
		    scrollTop: $(el).offset().top}, 1800);
		return false; 
	});
});