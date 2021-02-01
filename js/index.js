import { customCursor } from './modules/cursor.js';
import { scrollListener, clickListener } from './modules/animations.js';
import { menuClickListener } from './modules/burger-menu.js';

$(
  (() => {

    $('body').imagesLoaded()
  .always( function( instance ) {
    /*
    console.log('all images loaded');*/
  })
  .done( function( instance ) {
    
    console.log('all images successfully loaded');
    setTimeout(function(){
      $('body').addClass('loaded');
      customCursor();
      scrollListener();
      clickListener();
      menuClickListener();
    }, 0);
  })
  .fail( function() {
    
    console.log('all images loaded, at least one is broken');
    setTimeout(function(){
      $('body').addClass('loaded');
      customCursor();
      scrollListener();
      clickListener();
      menuClickListener();
    }, 0);
  })
  .progress( function( instance, image ) {
    /*
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );*/
  });



    /*
*/
  })()
);
