import {inGame, cursor, prevCursor} from './main.js';
import {canvas1, board} from './domUtils.js';

canvas1.addEventListener('click', (e) => {
    inGame['val'] = true;
    prevCursor['X'] = e.clientX;
    prevCursor['Y'] = e.clientY;
    document.documentElement.style.cursor = 'none';
    board.style.opacity = 100 + '%';
})

document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape') {
        inGame['val'] = false;
        document.documentElement.style.cursor = 'auto';
        board.style.opacity = 50 + '%';
    }
})

canvas1.addEventListener('mousemove', (e) => {
    if(inGame['val']) {
        prevCursor['X'] = cursor['X'];
        prevCursor['Y'] = cursor['Y'];
        cursor['X'] = e.clientX;
        cursor['Y'] = e.clientY;
    }
})