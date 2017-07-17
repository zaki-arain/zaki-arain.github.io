$(function() {
	var homeDiv = $("#home");
	var portfolio = $(".hexgrid");
	$("a#projects").click(function(){
		homeDiv.hide();
		portfolio.show();
	});
	$("a#back").click(function(){
		portfolio.hide();
		homeDiv.show();
	});
});