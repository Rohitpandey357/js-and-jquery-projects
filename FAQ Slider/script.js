var action="click";
var speed="500";

$(document).ready(function(){
	$('li.q').on(action,function(){
		$(this).next()
		.slideToggle(speed)
		.siblings('li.a').slideUp();
		
		var img = $(this).children('img');
		//REMOVE ROTATION FOR ALL IMAGES EXCEPT ACTIVE IMAGE
		$('img').not(img).removeClass('rotate');
		//TOGGLE ROTATE CLASS
		img.toggleClass('rotate');
	});
});