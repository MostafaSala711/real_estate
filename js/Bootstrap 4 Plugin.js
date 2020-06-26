/*global console, $, alert, prompt, plusplus*/


$(document).ready(function () {
    
    "use strict";
    
    // Window Height
    
    var windowH = $(window).height(),
        
        upperH = $(".upper-bar").innerHeight(),
        
        navH = $(".navbar").innerHeight();
    
    $(".slider, .carousel-item").height(windowH);
    
    // Links Active Class 
    
    $(".navbar ul .nav-link").on("click", function () {
        
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        
    });

    
    // Shuffle Work 
    
    $(".our-work ul li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
        if ($(this).data("class") === "all") {
            
            $(".shuffle .portofolio").css("opacity", 1);
            
        } else {
            
            $(".shuffle .portofolio").css("opacity", 0.1);
            
            $($(this).data("class")).parent().css("opacity", 1);
        }
    });
    
    // Trigger Nice Scroll
    
    $("html").niceScroll({
        
        cursorcolor: '#faa61a',
        cursorwidth: '10px',
        cursorborder: '1px solid #faa61a'
        
    });
    
});












