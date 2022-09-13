
window.addEventListener('DOMContentLoaded', function(){
	$(".openbtn1").click(function () {
		$(this).toggleClass('active');
		  $("#g__nav").toggleClass('panelactive');
	  });
	  
	  $("#g__nav a").click(function () {
		  $("openbtn1").removeClass('active');
		  $("#g__nav").removeClass('panelactive');
	  });
	
	});
	