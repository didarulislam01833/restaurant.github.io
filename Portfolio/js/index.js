/* =============Javascript Start================ */

/* =============Card Modal================ */
function hModal(){
	alert('Your Order Has beed Placed');
}



/* ==========Daily Menu Button Button Start============= */

var myStyle=document.querySelector(".dm-btn");
var see=document.querySelector(".dm-btn1");
var Button=document.getElementById("dl-btn");
function myFun1(){
	myStyle.style.display="block";
	Button.style.display="none";
	see.style.display="block";
}
function myFun2(){
	myStyle.style.display="none";
	Button.style.display="block";
	see.style.display="none";
}




/* =============Jquery Start================ */

/* ==========About Button============= */

$(document).ready(function(){
	$("#btn2").click(function(){
		$("#abtshow").show();
		$("#abtshow1").show();
		$("#btn2").hide();
	});
	$("#abtshow1").click(function(){
		$("#abtshow").hide();
		$("#abtshow1").hide();
		$("#btn2").show();
	});
});

/* =============Navabr Scroll Animation================ */  
  $(window).scroll(function(){
	  $('#top-nav').toggleClass('scrolled',$(this).scrollTop()>50);
  });
  
/* ============= LightBox in Image================ */  
  $(document).ready(function() {
    $('.gridImg').magnificPopup({
        type:'image',
        delegate:'a',
        gallery : {
            enabled:true
        }
     });
  });