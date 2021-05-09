$(document).ready(function(){
	var images=[
		"/assets/bg1.jpg",
		"/assets/bg2.jpg",
		"/assets/bg3.jpg",
	];

	var randomNumber = Math.floor(Math.random() * images.length);
	var bgImg = "url(" + images[randomNumber] + ")";

	$("html").css({"background":bgImg, "background-size":"cover", "background-attachment":"fixed", "background-position":"center"});

});


$(function(){
	// insert footer.html at element of id footer
	$("#footer").load("/footer.html");  
});
