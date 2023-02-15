$(document).ready(function( $ ) {
    $( ".home" ).first().addClass( "open" );
    $('#food-section').css("display","none");
});

// menu vertical
var tl = gsap.timeline();
tl.to(".item-red", {y: '0', duration:0.2});
tl.to(".item-blue", {y: '0', duration:0.2});
tl.to(".item-yellow", {y: '0', duration:0.2});
tl.to("h1", {opacity:1, duration: 1.3, ease:Power1.easeOut}, ">");


// menu open&close
$(".panel").click(function() {
    $('.panel').removeClass("open");
    $(this).toggleClass("open");
    $('.panel > p, .panel > span').css("opacity", 1);
    $(this).children("p, span").css("opacity", 0);
      
});

$(".panel.open").click(function() { $(this).removeClass("open"); 
});

// Logo animation
$(".item-yellow, .item-blue, .item-red").click(function() {
    $('.home-content').css("display","none"); 
    gsap.to(".logo", {height: '40px', width: '40px', left: '10px', duration: 0.3});
});

$(".home").click(function() { 
    gsap.to(".logo", {height: '70px', width: '70px', left: '60px', duration: 0.3});
    gsap.to( '.home-content', {'margin-left': '0', duration: 0.3});
    $('#food-section').css("display","none"); 
});

$(".home").click(()=> {
    $('footer, main').css("marginLeft", 0);
    $('.home-content').css("display","block");
    $('#food-section').css("display","none"); 
});

$(".item-yellow").click(()=>{ 
    $('footer, main').css("marginLeft", 60)
    $('#food-section').css("display","block");
});

$(".item-blue").click(()=> {
    $('footer').css("marginLeft", 120);
    $('#food-section').css("display","none");
});


$(".item-red").click(()=> $('footer').css("marginLeft", 180));



// Fade photos
gsap.to("#section-01 > img", {
    scrollTrigger:{
        trigger:"#section-01",
        start: "top center",
        end:"top, 100px"
    },   
    opacity: 1,
    duration:1.5    
});
gsap.to("#section-02 > .grid-photos", {
    scrollTrigger:{
        trigger:".grid-photos",
        start: "top center",
        end:"top, 100px"
    },   
    opacity: 1,
    duration:1.5   
});

// document.querySelector(".home").onclick = () => toggleMenu;

// gsap.from(".panel", {height: 100, opacity:1, duration: 0.3, stagger: 0.1});



