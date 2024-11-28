$(document).ready(function(){

	$("#g-recaptcha-response").attr('aria-hidden', 'true');

// for pageinfo
	var W = $( window ).width();
	var H = $( window ).height();
	$("#p1").text(W+' x '+H);

	// on resizing
	$( window ).resize(function() {
		var W = $( window ).width();
		var H = $( window ).height();
		$("#p1").text(W+' x '+H);
		close_dd();
		close_FRC();
		close_mobi_menu();
		if(W <= 767)
		{
			$('.menubar').removeClass('stuck');
			$('body').css('padding-top', '0');
		}
	});


// tabbing fields
	$("input").keyup(function () {
		if (this.value.length == this.maxLength) {
		  $(this).next('input').focus();
		}
	});

// close things
	$( 'html' ).click(function() {
		close_dd();
		close_hb();
		close_search();
		close_FRC();
		close_mobi_menu();
	});

// toggle aria-expanded
	function toggle_expanded(obj) {
		var exp = $(obj).attr("aria-expanded");
		if(exp === 'false')
			$(obj).attr("aria-expanded", 'true');
		else
			$(obj).attr("aria-expanded", 'false');
	}

// singup form

	$('label#label_for_element_3_5').addClass('visuallyhidden');
	$('input#element_3_5').attr('placeholder', 'Email Address');

// smarter banner
	$("#exappbanner").click(function(){
		$(".smarterbanner").slideUp("fast");
	});


// search 
	$('#sitesearch').click(function(s){
		s.stopPropagation(s);
//		var W = $( window ).width();
//		if(W > 991) {
//			$(".sitesearch").animate({width: 'toggle'}, 'slow');
//		} else {
			$(".sitesearch").toggleClass('out');
//		}
//		$(".sitesearch").slideToggle("slow");
		$(this).toggleClass("down");
		toggle_expanded(this);
		close_hb();
		close_dd();
		close_FRC();
		close_mobi_menu();
	});

	$('#sitesearch2').click(function(s){
		s.stopPropagation(s);
		var W = $( window ).width();
//		if(W > 991) {
			$(".sitesearch2").animate({width: 'toggle'}, 'slow');
//		} else {
//			$(".sitesearch2").toggleClass('out');
//		}
//		$(".sitesearch").slideToggle("slow");
		$(this).toggleClass("down");
		toggle_expanded(this);
		close_hb();
		close_dd();
		close_FRC();
		close_mobi_menu();
	});

	$('button#searchX').click(function(){
		$(".sitesearch").removeClass('out');
		$('#sitesearch').attr("aria-expanded", 'false');
		toggle_expanded(this);
	});


	function close_search(){
 		if(W > 991) {
			$(".sitesearch2").slideUp("fast");
		} else {
			$(".sitesearch").removeClass('out');
		}
		$('#sitesearch, #sitesearch2').attr("aria-expanded", 'false');
		$('#sitesearch2').removeClass("down");
		$('button#searchX').attr("aria-expanded", 'false');
	}

	$( '.sitesearch, .sitesearch2' ).click(function(s) {
		s.stopPropagation();
	});

// hb
	$( '#hbbttn, #hbbttn2' ).click(function(v) {
		v.stopPropagation();
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
			$(".hb").toggleClass("hbopen");
		else	
			$(".hb").slideToggle("slow");
		toggle_expanded(this);
		$(this).toggleClass("down");
        close_search();
		close_dd();
		close_mobi_menu();
	});

	$( '#hbex' ).click(function(v) {
		close_hb();
	});
	
	function close_hb(){
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
			$(".hb").removeClass("hbopen");
		else	
			$(".hb").slideUp("fast");
		$('#hbbttn').attr("aria-expanded", 'false');
		$('#hbbttn').removeClass("down");
	}

	$( '.hb' ).click(function(e) {
		e.stopPropagation();
	});

// menu
	function get_left(obj) {
		var W = $( window ).width();
		var childPos = $(obj).offset();
		var parentPos = $(obj).parent().offset();
		var childLeft = childPos.left - parentPos.left;
		return childLeft;
	}

	function get_R(obj) {
		var W = $( window ).width();
		var bttnW = $( obj ).width();
		var childPos = $(obj).offset();
		var parentPos = $(obj).parent().offset();
		var childR = childPos.left - parentPos.left - (460 - bttnW);
		return childR;
	}

	$( '.CMitem' ).click(function(event) {
		var which = $(this).attr("rel");
		close_hb();
		close_search();
//		Mpos = get_left(this);
		event.stopPropagation();
		if($( this ).hasClass( "opened" ) )
		{
			$(this).removeClass( "opened" );
			$(this).attr("aria-expanded", 'false');
			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
				$("#CMc"+which).css("display", "none");
			else
				$("#CMc"+which).slideUp("fast");

		}
		else
		{
			close_dd();
//			$("#CMc"+which).css("left", Mpos+'px');
			$( this ).toggleClass( "opened" );
			$(this).attr("aria-expanded", 'true');

			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
				$("#CMc"+which).css("display", "block");
			else
				$("#CMc"+which).slideDown("slow");

		}
	});

	function close_dd(){
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
			$(".ddcontent").css("display", "none");
		else
			$(".ddcontent").slideUp("fast");
		$('.opened').removeClass( "opened" );
		$('.CMitem' ).attr("aria-expanded", 'false');
		$('button.CMlink').attr("aria-expanded", 'false');
	}

	$( '.ddcontent' ).click(function(event) {
		event.stopPropagation();
	});

/* for 3rd level */
	$( 'button.CMlink' ).click(function(event) {
		event.stopPropagation();
		toggle_expanded(this);
		var which = $(this).attr("which");
		$("#CMs"+which).slideToggle('slow');
		$("button#CMb"+which).toggleClass( "opened" );
	});

// FRC menu
	$( '#FRCmenu' ).click(function(frc) {
		frc.stopPropagation();
		toggle_expanded(this);
		$(".FRCmenu").toggleClass("out");
		$( "#FRCmenu span").toggleClass("out");
	});

	$( '.FRCmenu' ).click(function(frc) {
		frc.stopPropagation();
	});
	
	function close_FRC(){
		$(".FRCmenu").removeClass("out");
		$( "#FRCmenu span").removeClass("out");
		$('#FRCmenu').attr("aria-expanded", 'false');
	}

// mobi menu

	$( '.menutoggler' ).click(function(m) {
		m.stopPropagation();
        $("nav.mobile").toggleClass("out");
        $(this).toggleClass("outed");
		toggle_expanded(this);
		close_hb();
		close_search();
	});

	$( 'nav.mobile' ).click(function(m) {
		m.stopPropagation();
	});
	
	$( '.menutoggler2' ).click(function(m) {
		m.stopPropagation();
		close_mobi_menu();
	});

	function close_mobi_menu(){
        $("nav.mobile").removeClass("out");
		$('.menutoggler').attr("aria-expanded", 'false');
		$('.menutoggler').removeClass("outed");

	}

	$( 'nav.mobile button' ).click(function() {
		var which = $(this).attr("which");
		$("#MM"+which).slideToggle("slow");
		$(this).toggleClass("Mflipped");
		toggle_expanded(this);
	});

// preload for community scroller

	$.fn.preload = function() {
		this.each(function(){
			$('<img/>')[0].src = this;
		});
	}

	$([
		'/templates/1st_comm/images/comm_scroller/Community.png',
		'/templates/1st_comm/images/comm_scroller/Community1.png',
		'/templates/1st_comm/images/comm_scroller/Community2.png',
		'/templates/1st_comm/images/comm_scroller/Community3.png',
		'/templates/1st_comm/images/comm_scroller/Community4.png',
	]).preload();


// stickiness
	$(window).scroll(function(){
		var Htop = 0;
		if($('.alertholder').length > 0)
			Htop += $('.alertholder').height();
		if($('.smarterbanner').length > 0)
			Htop += $('.smarterbanner').height();
		var headH = $('header').height();
		var wintop = $(window).scrollTop();
		var W = $( window ).width();
		var intbannerH = 0;
		if ( $('section.intbanner').length ) {
			intbannerH = $('section.intbanner').height();
		}

		if(W > 575)
		{
			if(wintop > Htop)
			{
				$('header').addClass('stuck');
				$('body').css('padding-top', headH+'px');
			}
			else
			{
				$('header').removeClass('stuck');
				$('body').css('padding-top', '0');
			}
		}

		var SCpos = $('section.comm_scroller').position();
		var SCtop = SCpos.top + Htop + intbannerH + 20;
		var SCbttm = SCtop + $('section.comm_scroller').height() - $('.CS_img').height();

		var CSblurb1pos = $('#marker1').position();
		var CSblurb1top = CSblurb1pos.top + SCtop;
		var CSblurb2pos = $('#marker2').position();
		var CSblurb2top = CSblurb2pos.top + SCtop;
		var CSblurb3pos = $('#marker3').position();
		var CSblurb3top = CSblurb3pos.top + SCtop;
		var CSblurb4pos = $('#marker4').position();
		var CSblurb4top = CSblurb4pos.top + SCtop;
		var CSblurb5pos = $('#marker5').position();
		var CSblurb5top = CSblurb5pos.top + SCtop;

		var block1 = $('.blurbs .code_block:nth-child(1)');
		var block2 = $('.blurbs .code_block:nth-child(2)');
		var block3 = $('.blurbs .code_block:nth-child(3)');
		var block4 = $('.blurbs .code_block:nth-child(4)');
		var block5 = $('.blurbs .code_block:nth-child(5)');


		if(wintop > SCtop && wintop < SCbttm) {
			$('.CS_img').addClass('fixed');
			$('.blurbs').addClass('fixed');
		} else {
			$('.CS_img').removeClass('fixed');
			$(block1).fadeOut('fast');
			$('.blurbs').removeClass('fixed');
		}
		if(wintop > SCbttm) {
			$('.CS_img').addClass('bottomed');
			$('.blurbs').addClass('bottomed');

		} else {
			$('.CS_img').removeClass('bottomed');
			$('.blurbs').removeClass('bottomed');
		}

		if(wintop > SCtop &&  wintop < CSblurb1top) {
			$(block1).fadeIn('slow');
			$(block2).fadeOut('slow');
			$('#CS_img1').fadeIn('slow');
			$('#CS_img2').fadeOut('slow');
		} else if(wintop > CSblurb1top && wintop < CSblurb2top) {
			$('#CS_img1, #CS_img3').fadeOut('slow');
			$('#CS_img2').fadeIn('slow');
			$(block2).fadeIn('slow');
			$(block1).fadeOut('slow');
			$(block3).fadeOut('slow');
		} else if(wintop > CSblurb2top && wintop < CSblurb3top) {
			$('#CS_img2, #CS_img4').fadeOut('slow');
			$('#CS_img3').fadeIn('slow');
			$(block3).fadeIn('slow');
			$(block2).fadeOut('slow');
			$(block4).fadeOut('slow');
		} else if(wintop > CSblurb3top && wintop < CSblurb4top) {
			$('#CS_img3, #CS_img5').fadeOut('slow');
			$('#CS_img4').fadeIn('slow');
			$(block4).fadeIn('slow');
			$(block3).fadeOut('slow');
			$(block5).fadeOut('slow');
		} else if(wintop > CSblurb4top && wintop < CSblurb5top) {
			$('#CS_img4').fadeOut('slow');
			$('#CS_img5').fadeIn('slow');
			$(block5).fadeIn('slow');
			$(block4).fadeOut('slow');
		}
		

	});



// this is the end, my only friend, the end
});


