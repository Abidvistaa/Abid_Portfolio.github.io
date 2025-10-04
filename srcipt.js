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

        if(this.scrollY>200){
            $('.msc').addClass("show1");
        }else{
            $('.msc').removeClass("show1");
        }
        if(this.scrollY>400){
            $('.bsc').addClass("show2");
        }else{
            $('.bsc').removeClass("show2");
        }
        if(this.scrollY>600){
            $('.hsc').addClass("show3");
        }else{
            $('.hsc').removeClass("show3");
        }
        if(this.scrollY>800){
            $('.ssc').addClass("show4");
        }else{
            $('.ssc').removeClass("show4");
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
        autoplay:true,
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
        strings:["DotNet Enthusiast","Software Engineer"],    
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    // experience animation script
    const columns = document.querySelectorAll('.exp-column');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // optional: trigger only once
            }
        });
    }, { threshold: 0.3 }); // triggers when 30% of the column is visible

    columns.forEach(column => {
        observer.observe(column);
    });
});