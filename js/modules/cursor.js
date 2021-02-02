var cursor = $('.cursor'),
  follower = $('.cursor-follower');

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12,
      },
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

export const customCursor = () => {
  $(document).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  $('a').on('mouseenter', function () {
    cursor.addClass('active');
    follower.addClass('active');
  });
  $('a').on('mouseleave', function () {
    cursor.removeClass('active');
    follower.removeClass('active');
  });
};