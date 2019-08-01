
//==========================================================================
// HEADER
//==========================================================================
$(window).scroll(function(){
	var gap = $("html, body").scrollTop();
	//console.log("gap");
	if(gap > 150) {
		if($("#wrap_header").hasClass("dn_bg") == false) {
			$("#wrap_header").css({"top":"-7%","position":"fixed"}).addClass("dn_bg");
			$("#wrap_header").stop().animate({"top":"0"}, 500);
			$(".header_gnb li > a").css({"color":"#222"});
			$(".header_logo").css({"font-size":"30px"});
		}
	}
	else {
		$("#wrap_header").css({"top":"-7%","position":"absolute"}).removeClass("dn_bg");
		$("#wrap_header").stop().animate({"top":"0"}, 500);
		$(".header_gnb li > a").css({"color":"#fff"})
		$(".mo_nav").css({"color":"#fff"})
		$(".header_logo").css({"font-size":"48px"});
		
	}
});

//==========================================================================
// MAIN
//==========================================================================
$(document).ready(function(){
    var time = 5
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;
    
    $slick = $('.slider');
    $slick.slick({
      draggable: true,
      adaptiveHeight: false,
      dots: false,
      mobileFirst: true
    });
    
    $bar = $('.slider-progress .progress');
    
    $slick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);

      var currentSlide = nextSlide;
      if((currentSlide+1) < 10){
        currentSlide = "0"+(currentSlide+1);
      }
      $(".slide-view").html(currentSlide);
      startProgressbar();
    });
    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }
    
    function interval() {
      if(isPause === false) {
        percentTime += 1 / (time+0.1);
        $bar.css({
          width: percentTime+"%"
        });
        if(percentTime >= 100)
          {
            $slick.slick('slickNext');
            var currentSlide = $slick.slick('slickCurrentSlide');
							if((currentSlide+1) < 10){
								currentSlide = "0"+(currentSlide+1);
							}
            startProgressbar();
          } 
      }
    }
    
    
    function resetProgressbar() {
      $bar.css({
       width: 0+'%' 
      });
      clearTimeout(tick);
    }
    startProgressbar();

    
    var totalSlide = $('.slide').length - $('.slick-cloned').length;
    var totalCount = $('.slide-total');
    totalCount.html("/0" + totalSlide);

  });


//==========================================================================
// FOOTER
//==========================================================================
$(document).on('click', '.family_site', function () {
    if($(".site_list").css('display') == 'block') {
        $(".family_site > i").addClass("fa-angle-up");
        $(".family_site > i").removeClass("fa-angle-down");
        $(".site_list").css({"display":"none"});
    } else {
        $(".family_site > i").removeClass("fa-angle-up");
        $(".family_site > i").addClass("fa-angle-down");
        $(".site_list").css({"display":"block"});
    }
});
