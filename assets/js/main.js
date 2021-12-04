(function ($) {
	"use strict";

    jQuery(document).ready(function($){


				
		         //===== Sticky Menu-Bar Start
		        $(window).on('scroll',function(event) {    
		            var scroll = $(window).scrollTop();
		             if (scroll < 100) {
		                 $("header").removeClass("sticky");
		             }else{
		                 $("header").addClass("sticky");
		             }
		         });
		        //===== Sticky Menu-Bar End


				$(".menu_trigger").click(function(){
					$(".mainmenu-wrap").addClass("active");
				});
				$(".menu_x").click(function(){
					$(".mainmenu-wrap").removeClass("active");
				});


				$(window).on('load', function(){
					//===== Prealoder
					$("#preloader").fadeOut("slow");
				});





				let dotOne = document.getElementById("doOne");
				let doTwo = document.getElementById("doTwo");
				let dotThree = document.getElementById("dotThree");
				let dotFour = document.getElementById("dotFour");
				let dotFive = document.getElementById("dotFive");
				let dotSix = document.getElementById("dotSix");
				let dotSaven = document.getElementById("dotSaven");
				let doteight = document.getElementById("doteight");
				let dotNine = document.getElementById("dotNine");
				let dotTen = document.getElementById("dotTen");
				let dotEleven = document.getElementById("dotEleven");


				window.addEventListener('scroll', function(){
					var value = window.scrollY;

					dotOne.style.marginTop = value * 0.5 + 'px';
					doTwo.style.marginBottom = value * 0.1 + 'px';
					dotThree.style.marginRight = value * 0.1 + 'px';
					dotFour.style.marginRight = value * 0.1 + 'px';
					dotFive.style.marginTop = value * 0.1 + 'px';
					dotSix.style.marginBottom = value * 0.1 + 'px';
					dotSaven.style.marginBottom = value * 0.1 + 'px';
					doteight.style.marginLeft = value * 0.1 + 'px';
					dotNine.style.left= value * -0.1 + 'px';
					dotTen.style.top= value * 0.1 + 'px';
					dotEleven.style.marginBottom= value * 0.1 + 'px';



				});

		










	});



    jQuery(window).load(function(){


    });


}(jQuery));	