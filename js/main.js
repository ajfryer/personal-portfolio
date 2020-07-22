function navScrollListener() {
  let $nav = $('nav');
  $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
  $(document).scroll(function () {
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
}

function linkClickListener() {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
}

function particleBackgrounds() {
  Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 450,
    connectParticles: true,
    color: '#48F2E3',
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          color: '#48F2E3',
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0, // disables particles.js
        },
      },
    ],
  });
}

function init() {
  navScrollListener();
  linkClickListener();
  //particleBackgrounds();
}

$(init);
