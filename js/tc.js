// JavaScript Document

// Koden är skriven av Toni Caktas
 
 
 
 // jag gör dessa funktioner till variablar för att slippa skriva samma långa kod massa gånger
 
 var allW = function(){
	 $(".wrapperRed, .wrapperBlue, .wrapperYellow, .wrapperBlack")
	 	.animate({left:"0%"},550);
	 };// end allW
	 
var navWrap = function(){
	$(".wrapperRed, .wrapperBlue, .wrapperYellow, .wrapperBlack, .wrapperWhite")
		.hide();
	};// end navWrap


 
 // på sidan behöver jag 2 olika navigeringar med click event, en för stora skärmar och en för mobila enheter.
 
$(document).ready(function(){
// till stora skärmar 	
	$(".wrapperWhite li").click(function(){
		$(".wrapperWhite").css("background","white");
		});
	
	$(".lAbout").click(function(){
		allW();
		$(".wrapperRed")
		.removeClass("transparent")
		.animate({ left: "50%"},550);
		});
		
			
	$(".lPortfolio").click(function(){
		allW();
		$(".wrapperBlue")
		.removeClass("transparent")
		.animate({ left: "50%"},550);
		});
		
				
	$(".lResume").click(function(){
		allW();
		$(".wrapperYellow")
		.removeClass("transparent")
		.animate({ left: "50%"},550);
		});
		
				
	$(".lKontakt").click(function(){
		allW();
		$(".wrapperBlack")
		.removeClass("transparent")
		.animate({ left: "50%"},550);
		});	
	
	// Manipulera CSS 	
	$(".lAjk").click(function(){
		allW();
		$(this).css("background-color", "pink");
		});	
		
		
		
	// till mobila enheter, funktionen utför samma syfte fast här har jag en funktion med flera if satser istället för en hel del funktioner.
		
		$("nav button").click(function(){
			$("nav li").slideToggle();
			
				$("nav li").click(function(){
					$("nav li").hide();
				
						if($(this).hasClass("nlAbout")){
							navWrap();
							$(".wrapperRed").fadeIn();
						}
						
						if($(this).hasClass("nlPortfolio")){
							navWrap();
							$(".wrapperBlue").fadeIn();
						}
					
						if($(this).hasClass("nlResume")){
							navWrap();
							$(".wrapperYellow").fadeIn();
						}
					
						if($(this).hasClass("nlKontakt")){
							navWrap();
							$(".wrapperBlack").fadeIn();
						}
							
						if($(this).hasClass("home")){
							navWrap();
							$(".wrapperWhite").fadeIn();
						}	
					
				
				}); // end (nav li).click
			
			});	// end (nav button).click
	});	// end (document).ready
					
					
				
	
		
		
	
