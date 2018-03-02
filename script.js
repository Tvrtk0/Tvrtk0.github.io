
window.onscroll = function() {myFunction(),scrollFunction()};

//sticky navbar
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//sticky navbar

/*
//scroll up
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//scroll up
*/


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})


//navbar scroll function
var scrollY = 0;
var distance = 40;
function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',10);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-150){
		    scrollY = currentY+distance;
		    window.scroll(0,scrollY );


	    } else if(currentY > targetY-100){
		    scrollY = currentY-distance;
		    window.scroll(0,scrollY );
		    

	    }else {
		    clearTimeout(animator);
	    }
	}
}

function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',5);
	if(currentY > targetY){
		scrollY = currentY-40;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}
//


	function active(){
/*1*/	if ( window.pageYOffset+ window.innerHeight > document.getElementById('notation').offsetTop ) {
			var d = document.getElementById("1notation");
			d.classList.add("active");
		}
		else{
			var d = document.getElementById("1notation");
			d.classList.remove("active");	
		} 

/*2*/	if ( window.pageYOffset+ window.innerHeight > document.getElementById('cross').offsetTop ) {
			var d = document.getElementById("2cross");
			d.classList.add("active");
		}
		else{
			var d = document.getElementById("2cross");
			d.classList.remove("active");	
		} 
		
/*3*/	if ( window.pageYOffset+ window.innerHeight > document.getElementById('F2L').offsetTop ) {
			var d = document.getElementById("3f2l");
			d.classList.add("active");
		}
		else{
			var d = document.getElementById("3f2l");
			d.classList.remove("active");	
		} 

/*4*/	if ( window.pageYOffset+ window.innerHeight > document.getElementById('oll').offsetTop ) {
			var d = document.getElementById("4oll");
			d.classList.add("active");
		}
		else{
			var d = document.getElementById("4oll");
			d.classList.remove("active");	
		} 

/*5*/	if ( window.pageYOffset+ window.innerHeight > document.getElementById('pll').offsetTop ) {
			var d = document.getElementById("5pll");
			d.classList.add("active");
		}
		else{
			var d = document.getElementById("5pll");
			d.classList.remove("active");	
		} 

	}



	document.getElementById("1notation").onclick = function(){
		var a = document.getElementById("1notation");
			a.classList.add("active");
		var b = document.getElementById("2cross");
			b.classList.remove("active");
		var c = document.getElementById("3f2l");
			c.classList.remove("active");	
		var d = document.getElementById("4oll");
			d.classList.remove("active");
		var e = document.getElementById("5pll");
			e.classList.remove("active");
	}	



	document.getElementById("2cross").onclick = function(){
		var a = document.getElementById("1notation");
			a.classList.add("active");
		var b = document.getElementById("2cross");
			b.classList.add("active");
		var c = document.getElementById("3f2l");
			c.classList.remove("active");	
		var d = document.getElementById("4oll");
			d.classList.remove("active");
		var e = document.getElementById("5pll");
			e.classList.remove("active");
	}	



	document.getElementById("3f2l").onclick = function(){
		var a = document.getElementById("1notation");
			a.classList.add("active");
		var b = document.getElementById("2cross");
			b.classList.add("active");
		var c = document.getElementById("3f2l");
			c.classList.add("active");	
		var d = document.getElementById("4oll");
			d.classList.remove("active");
		var e = document.getElementById("5pll");
			e.classList.remove("active");
	}	



	document.getElementById("4oll").onclick = function(){
		var a = document.getElementById("1notation");
			a.classList.add("active");
		var b = document.getElementById("2cross");
			b.classList.add("active");
		var c = document.getElementById("3f2l");
			c.classList.add("active");	
		var d = document.getElementById("4oll");
			d.classList.add("active");
		var e = document.getElementById("5pll");
			e.classList.remove("active");
	}	



	document.getElementById("5pll").onclick = function(){
		var a = document.getElementById("1notation");
			a.classList.add("active");
		var b = document.getElementById("2cross");
			b.classList.add("active");
		var c = document.getElementById("3f2l");
			c.classList.add("active");	
		var d = document.getElementById("4oll");
			d.classList.add("active");
		var e = document.getElementById("5pll");
			e.classList.add("active");
	}	
