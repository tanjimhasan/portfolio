jQuery(document).ready(function($){
	$("#fakeLoader").fakeLoader({
        	timeToHide:4000,
            bgColor:"#2ecc71",
            spinner:"spinner1"
        });
		


		var skillsDiv = jQuery('#skills-load');

		jQuery(window).on('scroll', function() {
		  var winT = jQuery(window).scrollTop(),
		    winH = jQuery(window).height(),
		    skillsT = skillsDiv.offset().top;
		  if (winT + winH > skillsT) {
		    jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},5000);
			});
		  }
		});

	$(".portfolio-filter li").on('click', function(){
		var filterData = $(this).attr("data-filter");
		$(".portfolio-list").isotope({
			filter: filterData,
		});

		$(".portfolio-filter li").removeClass('active');
		$(this).addClass('active');
	});

	$(".portfolio-list").isotope({
			itemSelector: '.single-portfolio-item',
			layoutMode: 'fitRows',
			fitRows: {
				  gutter: 25
				}
		});

	//sticky menu active
        $('.site-header').sticky({topSpacing: 0});
        
        //smooth scroll
        $('li.smooth-menu a').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '62';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });

        $('a.smooth-menu').bind('click',function(event){
            var $anchor = $(this);
            var headerH = '62';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH+"px"
            },1280,'easeInOutExpo');
            event.preventDefault();
        });

        var typed = new Typed('#typed', {
		  strings: ["Hi! I am Tanjim Hasan", "A Professional Web Developer."],
		  typeSpeed: 100,
		  backSpeed: 100,
		  showCursor: false,
		  loop:true,
		  disableBackTyping: true,
		});

		

		$(window).on("load",function(){
			$(".preloader-box").fadeOut(2000);
		});


        
   
});