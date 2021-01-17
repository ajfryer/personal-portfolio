const $nav = $('nav');
const $menu = $('.menu');

export const menuClickListener = () => {
  $menu.on('click', (e) => {
    console.log('menu clicked')
    e.preventDefault();
    if ($nav.hasClass('responsive')) {
      $nav.removeClass('responsive');
    } else {
      $nav.addClass('responsive');
    }
  });
};