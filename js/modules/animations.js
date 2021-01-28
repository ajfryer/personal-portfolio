// global jquery selectors
const $document = $(document);
const $window = $(window);
const $follower = $('#follower');
const $sections = $('.animate');
const $nav = $('nav');

// adds or removes visible class on .animate sections based on screen position
const animateSections = () => {
  const pageTop = $document.scrollTop();
  const pageBottom = pageTop + $window.height();
  const offset = 50;

  $sections.each((_, val) => {
    const $section = $(val);

    $section.toggleClass(
      'visible',
      $section.position().top < pageBottom - offset
    );
  });
};

// adds or removes scrolled class on nav based on screen position
const animateNav = () => {
  $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
};

// listens for updated screen position and calls animate functions
export const scrollListener = () => {
  animateNav();
  animateSections();

  $document.scroll((e) => {
    animateNav();
    animateSections();
  });
};

// for smooth scroll-to anchor tags
export const clickListener = () => {
  $('a[href*="#"]').on('click', (e) => {
    e.preventDefault();
    const $target = $(e.target).attr('href') ? $(e.target).attr('href') : $($(e.currentTarget)).attr('href')
    $('html, body').animate(
      {
        scrollTop: $($target).offset().top,
      },
      500,
      'linear'
    );
  });
};



// on document ready
$((() => {})());
