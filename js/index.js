import { customCursor } from './modules/cursor.js';
import { scrollListener, clickListener } from './modules/animations.js';

$(
  (() => {
    customCursor();
    scrollListener();
    clickListener();
  })()
);
