import { customCursor } from './modules/cursor.js';
import { scrollListener, clickListener } from './modules/animations.js';
import { menuClickListener } from './modules/burger-menu.js';

$(
  (() => {
    customCursor();
    scrollListener();
    clickListener();
    menuClickListener();
  })()
);
