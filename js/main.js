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

function init() {
  navScrollListener();
  linkClickListener();
}

$(init);
