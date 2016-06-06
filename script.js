
var main = function(){
	$('li').hover(
		function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		}
	);
};

$(document).ready(main);
