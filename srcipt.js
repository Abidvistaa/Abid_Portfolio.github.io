$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>75){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }

        if(this.scrollY>400){
            $('.bsc').addClass("show1");
        }else{
            $('.bsc').removeClass("show1");
        }
        if(this.scrollY>600){
            $('.hsc').addClass("show2");
        }else{
            $('.hsc').removeClass("show2");
        }
        if(this.scrollY>800){
            $('.ssc').addClass("show3");
        }else{
            $('.ssc').removeClass("show3");
        }
    
    });

    
    // Scroll btn click script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    // Scroll btn click script
    

    var typed=new Typed(".typing-2",{
        strings:["DotNet Enthusiast"],    
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
});