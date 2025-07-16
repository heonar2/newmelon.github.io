$(document).ready(function() {
  //햄버거버튼

  $('#ham').change(function() {
    if ($(this).is(':checked')) {
      $('#right_wrap').show();
      $('#overlay').fadeIn();
    }else {
      $('#right_wrap').hide();
      $('#overlay').fadeOut();
    }
  });

  $('#overlay').click(function() {
    $('#ham').prop('checked', false).change();
  });

  //섹션1 슬라이드

  let i = 0;
  let interval;

  function startSlide() {
    interval = setInterval(slide, 5000);
  }

  function stopSlide() {
    clearInterval(interval);
  }
  const slideWidth = $('#mask').width();
  function slide() {
    
    if (i < 3) {
      i++;
    }else {
      i=0;
    }
    $('#img_wrap').animate({
      left: -slideWidth * i
    });

    $('#list_wrap li').removeClass('active');
    $('#list_wrap li').eq(i).addClass('active');

  }

  startSlide();

  $('#list_wrap li').each(function(index) {
    $(this).attr('data-index', index);
  });

  $('#list_wrap li').click(function() {
    i = $(this).attr('data-index');
    $('#img_wrap').animate({
      left: -slideWidth * i,
    });

    $('#list_wrap li').removeClass('active');
    $('#list_wrap li').eq(i).addClass('active');
  });

  $('#img_wrap').hover(
    function() {
      stopSlide();
    },
    function() {
      startSlide();
    }
  );

  //섹션2 플레이어

  const players = [];
  let pcCurrentIndex = 0;

  $('.hot_music_wrap').each(function(index) {
  const src = $(this).data('src');
  const containerId = $(this).find('.wave_wrap').attr('id');

  const ws = WaveSurfer.create({
    container: `#${containerId}`,
    waveColor: '#757575',
    progressColor: '#ffffff',
    height: 48,
  });

  ws.load(src);
  players.push(ws);

    // 재생버튼 연결
    $(this).find('.play_zone').click(function () {
      // 다른 플레이어 정지
      players.forEach((p, i) => {
        if (i !== index) p.stop();
      });

      pcCurrentIndex = index;
      ws.playPause();

      // 버튼 상태 업데이트
      $('.play_zone').removeClass('pause').addClass('play');
      if (ws.isPlaying()) {
        $(this).removeClass('play').addClass('pause');
      } else {
        $(this).removeClass('pause').addClass('play');
      }
    });

    // 좋아요 버튼 연결
    $(this).find('.heart').click(function () {
      $(this).toggleClass('empty filled');
    });

    // 자동 다음 곡 재생
    ws.on('finish', function () {
      const nextIndex = pcCurrentIndex + 1;
      if (nextIndex < players.length) {
        $('.hot_music_wrap').eq(nextIndex).find('.play_zone').click();
      } else {
        // 마지막 곡이면 버튼 상태 play로 초기화
        $('.play_zone').removeClass('pause').addClass('play');
        
       ws.stop();
      }
    });
  });


  //섹션3 버튼, 슬라이드

  let num = 0;
  const btnWidth = $('#left_con').width();

  $('#right').click(function() {
    
    if(num > 3) {
      return;
    }
    
    num++;

    $('.num').text(num + 1);

    $('#left_slide_wrap').animate({
      left: -btnWidth * num,
    });
  });

  $('#left').click(function() {
    

    if(num < 1) {
      return;
    }
    
    num--;

    $('.num').text(num + 1);

    $('#left_slide_wrap').animate({
      left: -btnWidth * num,
    });
  });

  let j = 0;
  let inter;

  function startSlide2() {
    inter = setInterval(slide2, 5000);
  }

  function stopSlide2() {
    clearInterval(inter);
  }
  const slideWidth2 = $('#right_mask').width();

  function slide2() {
    
    if (j < 3) {
      j++;
    }else {
      j = 0;
    }

    $('#right_slide_wrap').animate({
      left: -slideWidth2 * j,
    });

    $('#list_wrap2 li').removeClass('active');
    $('#list_wrap2 li').eq(j).addClass('active');
  }

  startSlide2();

  $('#list_wrap2 li').each(function(index) {
    $(this).attr('data-index', index);
  });

  $('#list_wrap2 li').click(function() {
    j = $(this).attr('data-index');
    $('#right_slide_wrap').animate({
      left: -slideWidth2 * j,
    });

    $('#list_wrap2 li').removeClass('active');
    $('#list_wrap2 li').eq(j).addClass('active');
  });

  $('#right_slide_wrap').hover(
    function() {
      stopSlide2();
    },
    function() {
      startSlide2();
    }




  );

  //섹션4 버튼슬라이드

  let num2 = 0;

  const btnWidth2 = $('#hot_con_mask').width();

  $('#right2').click(function() {
    

    if(num2 > 0) {
      return;
    }
    
    num2++;

    $('.num2').text(num2 + 1);

    $('#hot_con_wrap').animate({
      left: -btnWidth2 * num2,
    });
  });

  $('#left2').click(function() {
    

    if(num2 < 1) {
      return;
    }
    
    num2--;

    $('.num2').text(num2 + 1);

    $('#hot_con_wrap').animate({
      left: -btnWidth2 * num2,
    });
  });


    //모바일
    //서브메뉴

    $('#mo_ham').click(function() {
      $('#mo_submenu').fadeIn(500);
      $('body').css('overflow', 'hidden');
    });

    $('#close').click(function() {
      $('#mo_submenu').fadeOut(500);
      $('body').css('overflow', 'auto');
    });

    //모바일 슬라이드

    let k = 0;
    let interval2;

    function moStartSlide() {
      interval2 = setInterval(moSlide, 5000);
    }
    
    const moSlideWidth = $('#mo_slide_mask').width();
    function moSlide() {
      
      if (k < 3) {
        k++;
      }else {
        k=0;
      }
      $('#mo_img_wrap').animate({
        left: -moSlideWidth * k
      });

      $('#img_in li').removeClass('active2');
      $('#img_in li').eq(k).addClass('active2');

    }

    moStartSlide();

    $('.more_btn2, .more_btn2 img').click(function(e) {
      e.stopPropagation();
      $('.overlay').fadeIn(300);
      $('.more_menu').slideDown(300);
      $('body').css('overflow', 'hidden');
    });

    $('.overlay').click(function() {
      $(this).hide();
      $('.more_menu').hide();
      $('body').css('overflow', 'auto');
    });

    $('#closed').click(function(){
      $('.overlay').fadeOut(300);
      $('.more_menu').slideUp(300);
      $('body').css('overflow', 'auto');
   });

   //모바일 웨이브서퍼

   let currentIndex = 0;

   const moWaveSurfer = WaveSurfer.create({
    container: '#mo_waveform',
    waveColor: '#757575',
    progressColor: '#ffffff',
    height: 50,
    responsive: true,
   });

   function loadAndPlayFromElement($el) {
    const src = $el.data('src');
    const title = $el.data('title');
    const artist = $el.data('artist');
    const img = $el.data('img');
    currentIndex = parseInt($el.data('index'));

    $('#mobile_player .player_thumb img').attr('src', img);
    $('.player_title').text(title);
    $('.player_artist').text(artist);
    $('#mobile_player').fadeIn();

    moWaveSurfer.load(src);
    moWaveSurfer.once('ready', function() {
    moWaveSurfer.play();
  });
  }

   $('.play_btn').click(function() {
    const $wrap = $(this).closest('.mo_hot_music_wrap');
    loadAndPlayFromElement($wrap);

    $('#play_toggle').removeClass('play').addClass('pause');
   });

   $('#prev_btn').click(function(){
    const $prev = $('.mo_hot_music_wrap').eq(currentIndex - 1);
    if ($prev.length) loadAndPlayFromElement($prev);
  });

  $('#next_btn').click(function(){
    const $next = $('.mo_hot_music_wrap').eq(currentIndex + 1);
    if ($next.length) loadAndPlayFromElement($next);
  });

  $('#play_toggle').click(function () {
    moWaveSurfer.playPause();

    if(moWaveSurfer.isPlaying()) {
      $(this).removeClass('play').addClass('pause');
    } else {
      $(this).removeClass('pause').addClass('play');
    }
  });

  moWaveSurfer.on('finish', function(){

    const $next = $('.mo_hot_music_wrap').eq(currentIndex + 1);

    if($next.length) {
      loadAndPlayFromElement($next);
    } else {
      $('#play_toggle')
      .removeClass('pause')
      .addClass('play')
      .find('img')
      .attr('src', 'images/play_btn.png)')
      .attr('alt', '재생버튼')
      moWaveSurfer.stop();
    }

  });

  $(window).scroll(function() {
    sct = $(window).scrollTop();

    if(sct > 600) {
      $('#mobile_player').fadeOut(300);
    } else {
      $('#mobile_player').fadeIn(300);
    }
  });

  const swiper = new Swiper(".mo_new", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    grabCursor: true,
  });

});







