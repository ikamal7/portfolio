(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //Off canvas menu show
        $(".off-canvas-menu-trigger").on('click', function(){
        	$(".off-canvas-menu").addClass("show-off-canvas-menu");
        	$(".off-canvas-menu-shade").addClass("shade-show");

        });
        //menu hide
        $(".menu-close, .off-canvas-menu-shade").on('click', function(){
        	$(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("shade-show");
        });

/*
        $(".off-canvas-menu-trigger").click(function(){
        	$(".show-off-canvas-menu").toggle();
        });
        */

         $(window).on('scroll', function() {    
               var scroll = $(window).scrollTop();
               if (scroll < 500) {
                $(".off-canvas-menu-trigger").removeClass("show-icon");
               }else{
                $(".off-canvas-menu-trigger").addClass("show-icon");
               }
          });

        


        // Add smooth scrolling to all links
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 2000, 'swing', function() {
                // window.location.hash = target;
            });
        });

        /*$(window).scroll(function(){
			if ($(this).scrollTop() > 1000) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});*/
	
	//Click event to scroll to top
		$('#top').click(function(){
			$('html, body').animate({scrollTop : 0},1000);
			return false;
		});

        $('a[href="#"').on('click', function(e){
            e.preventDefault();
        });


        
                


    });


    jQuery(window).load(function(){


        
    });


}(jQuery));	