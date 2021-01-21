
/* =============Javascript Start================ */
/* =============Card Modal================ */
function hModal(){
	alert('Your Order Has beed Placed');
}
/* =============About Button================ */
var s=document.getElementById('s1par');
function spBtn(){
    s.innerHTML="I Love to do Web Design & This is my passion";
}


/* =============Jquery Start================ */
/* ========== Owl Carousel============= */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	navText:['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
		900:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
/* =============Navabr Scroll Animation================ */  
  $(window).scroll(function(){
	  $('#top-nav').toggleClass('scrolled',$(this).scrollTop()>50);
  });
  

/* ============= LightBox in Image================ */  
  $(document).ready(function() {
    $('.gallerys').magnificPopup({
        type:'image',
        delegate:'a',
        gallery : {
            enabled:true
        }
     });
  });