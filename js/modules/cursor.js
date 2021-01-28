const follower = $('.cursor-follower');

let posX = -50,
  posY = -50;

let mouseX = -50,
  mouseY = -50;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX,
        top: posY,
      },
    });

  },
});


export const customCursor = () => {
  $(document).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  $('a, img, p, h1, h2, h3, h4, h5, li, span').on('mouseenter', function () {
    follower.addClass('active');
  });
  $('a, img, p, h1, h2, h3, h4, h5, li, span').on('mouseleave', function () {
    follower.removeClass('active');
  });
};
