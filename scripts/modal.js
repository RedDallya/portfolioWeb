$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Sushi Restaurant',
      tag: 'Marca de restaurante chino.',
      detail:
        'Marca diseñada para restaurante chino de sushi en Mar del Plata',
    
    },
    ordering: {
      title: 'Portfolio Web',
     
      tag: 'Presentacion de trabajos realizados y habilidades tecnicas.',
      detail:
        'Mi proyecto se basa en mi presentacion personal de Curriculum Vitae',
      link:'https://reddallya.github.io/portfolioWeb/',
    },
    
    service2: {
      title: 'Prestacion de Servicios',
      tag: 'ALGUNAS DE MIS HABILIDADES',
      detail:
        'Como desarrollador Full Stack, tengo un dominio sólido tanto en el front-end como en el back-end, lo que me permite crear soluciones completas y eficientes.',
      link: 'https://github.com/RedDallya'
    },
    roambi: {
      title: 'Beat Pass Ticket',
      tag: 'Pagina Web para venta de entradas online en diferentes pñlataformas',
      detail:
        'Adquiere tus entradas para los eventos de electronica mas importantes de la ciudad',
      link: 'https://reddallya.github.io/beatpassticket/',
    },
   
   
  
    themall: {
      title: 'Soundaka Productora de Eventos',
      tag: 'Pagina web para administracion de eventos de musica',
      detail:
        'Gran variedad de eventos de musica electronica con implementacion de compras de tickets'
    },

    newrelic: {
      title: 'Gran prestacion de servicios para implementar en las redes sociales',
      tag:'chatbot,paginaweb,diseño de marca',
      detail:'Contactame para explorar las herramientas que ofrezco',
      link: 'https://wa.me/+5491122517518',
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
