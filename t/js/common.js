

$(document).ready(function() {

    if (window.matchMedia("(max-width: 480px)").matches) {
      $('.asist_for_artist_peoples_block').slick({
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          infinite: true
      });
    } 

    $(window).resize(function(e){
        if(window.innerWidth < 480) {
            if(!$('.asist_for_artist_peoples_block').hasClass('slick-initialized')){

                $('.asist_for_artist_peoples_block').slick({
                  dots: false,
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 300,
                  infinite: true
              });

            }

        }else{
            if($('.asist_for_artist_peoples_block').hasClass('slick-initialized')){
                $('.asist_for_artist_peoples_block').slick('unslick');
            }
        }
    });

    $(".front_toggle").click(function() {
      $(this).toggleClass("on");
      $(".toggle_mnu").toggleClass("toggle_mnu_active");
      $('body').toggleClass('body_overflow')
    });

    $("#how_its_work").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".scroll_down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    


    $(".demands").click(function() {
      $(this).toggleClass("on");
      if ($('.arrow_tggler').is(":visible")) {
        $(".demands ul").slideToggle();
      }
      
    });

    var data = {};
    
    $("input").focus(function(){
    	$(this).css("border-color", "transparent");
    });
    $('input[type=email], input[type=password], #chose_role').change(function(){
        if ($(this).val() !== '') {
        	$(this).parent().find('span').hide();
        }
        else{
        	$(this).parent().find('span').show();
        }        
    });

    $("#agree_check").click(function(){
    	if ($('#agree_check').is(":checked")) {
    		$('.agree_check span').css({
    			'border-color': ''
    		});    		
    	}
    });

    $("#continue").click(function(){
    	function showSecondStep() {
    		$('#registration_step_1').hide();
    		$('#registration_step_2').show();
    		$('.page_counter_1').hide();
    		$('.page_counter_2').show();
    	}
    	if ($('#agree_check').is(":checked") && $('input[type=email]').val() !== '' && $('input[type=password]').val() !== ''){
    		console.log($('input[type=email]').val(), $('input[type=password]').val())
    		showSecondStep();
    	}    	

    	else if ($('input[type=email]').val() === '') {
    		$('input[type=email]').css({
    			'border': '1px solid red'
    		});
    	}

    	else if ($('input[type=password]').val() === '') {
    		$('input[type=password]').css({
    			'border': '1px solid red'
    		});
    	}

    	else if  (!$('#agree_check').is(":checked")){
    		$('.agree_check span').css({
    			'border-color': 'red'
    		});
    	}
    	
    });

    $("#register_button").click(function(){
    	function showThirdStep() {
    		$('#registration_step_2').hide();
    		$('.page_counter_2').css({'visibility': 'hidden'});
    		$('#confirm_email').show();
    		$('.register_form').find('.form_title').text("Проверьте Ваш Email");
    	};
    	if ($('input[type=text]').last().val() !== '' && $('#user_name').val() !== '' && $('#user_surname').val() !== ''){
    		console.log($('input[type=text]').val(), $('input[type=text]').val())
    		showThirdStep();
    	}

    	else if ($('input[type=text]').val() === '') {
    		$('input[type=text]').css({
    			'border': '1px solid red'
    		});
    	}
    	
    });

    $(".back_to_step_1").click(function(){
    	$('#registration_step_1').show();
    	$('#registration_step_2').hide();
    	$('.page_counter_1').show();
    	$('.page_counter_2').hide();
    });


    //user page
    $(".user_page_selected").click(function(){
    	$('#select_togler').slideToggle();
    	$(this).toggleClass('open');
    });

    // new_relize_steps new_relize_publish
    $("#go_to_track_step").click(function(){
    	if ($('#information_content_relize_name').val() !== ''){   		
    		data.relizeName = $('#information_content_relize_name').val();
    		console.log(data);
    		$('.relize_nav li').first().removeClass('active');
    		$('.relize_nav li').eq(1).addClass('active');
    		$('.information_content').hide();
    		$('.track_content').show();
    	}  
    	else if ($('#information_content_relize_name').val() === '') {
    		$('#information_content_relize_name').css({
    			'border': '1px solid red'
    		});
    	}  	
    });
    //back botton on track page
    $(".track_info_back").click(function(){
    	$('.relize_nav li').first().addClass('active');
    	$('.relize_nav li').eq(1).removeClass('active');
    	$('.information_content').show();
    	$('.track_content').hide();
    });
    //nwxt botton on track page
    $("#track_info_next").click(function(){
    	if ($('#track_name').val() !== '' && $('#chose_role').val() !== ''){   		
    		data.trackName = $('#track_name').val();
    		data.choseRole = $('#chose_role').val();
    		$('.relize_value').text(data.relizeName);
    		$('.artist_value').text(data.choseRole);
    		console.log(data);
    		$('.relize_nav li').eq(1).removeClass('active');
    		$('.relize_nav li').eq(2).addClass('active');    		
    		$('.track_content').hide();
    		$('.publish_content').show();
    	}  
    	else if ($('#track_name').val() === '') {
    		$('#track_name').css({
    			'border': '1px solid red'
    		});
    	}
    	else if ($('#chose_role').val() === '') {
    		$('#chose_role').css({
    			'border': '1px solid red'
    		});
    	}   	
    });

    //relize_descroption_buttons
    $("#save, #send").click(function(){
    	if ($('.agree_check_publish .check').is(":checked")) {
    		$('.agree_check_publish span').css({
    			'border-color': ''
    		});    		
    	}
    	else if  (!$('.agree_check_publish .check').is(":checked")){
    		$('.agree_check_publish span').css({
    			'border-color': 'red'
    		});
    	}
    });

    $(".check").click(function(){
    	if ($('.check').is(":checked")) {
    		$(this).parent().find('span').css({
    			'border-color': ''
    		});    		
    	}
    });


    //cataloge delete item 

    $(".item_bottons .delete").click(function(){
    	$(this).parent().parent().slideUp("300", function(){
    		$(this).remove();
    	});
    });


    //add cover img on page new relize 
    function previewFile() {
      var preview = document.getElementById('user_img');
      var file    = document.getElementById('input_cover_img').files[0];
      var reader  = new FileReader();
      $('.add_cover_img .add_cover_tex').hide();
      $('.add_cover_img').addClass('form_active');
      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);

      }
    }

     $('#input_cover_img').change(function(){
      previewFile();
     });
    






    //select function on track page
    $('#categories').each(function(){
    	var $this = $(this), numberOfOptions = $(this).children('option').length;

    	$this.addClass('select-hidden'); 
    	$this.wrap('<div class="select"></div>');
    	$this.after('<div class="select-styled"></div>');

    	var $styledSelect = $this.next('div.select-styled');
    	$styledSelect.text($this.children('option').eq(0).text());

    	var $list = $('<ul />', {
    		'class': 'select-options'
    	}).insertAfter($styledSelect);

    	for (var i = 0; i < numberOfOptions; i++) {
    		$('<li />', {
    			text: $this.children('option').eq(i).text(),
    			rel: $this.children('option').eq(i).val()
    		}).appendTo($list);
    	}

    	var $listItems = $list.children('li');

    	$styledSelect.click(function(e) {
    		e.stopPropagation();
    		$('div.select-styled.active').not(this).each(function(){
    			$(this).removeClass('active').next('ul.select-options').hide();
    		});
    		$(this).toggleClass('active').next('ul.select-options').toggle();
    	});

    	$listItems.click(function(e) {
    		e.stopPropagation();
    		$styledSelect.text($(this).text()).removeClass('active');
    		$this.val($(this).attr('rel'));
    		$list.hide();
    		data.select = $('#categories').val();
      });

    	// $(document).click(function() {
    	// 	$styledSelect.removeClass('active');
    	// 	$list.hide();
    	// });

    });

});
