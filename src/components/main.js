/** @type {HTMLCanvasElement} */

import {canvas1} from './domUtils.js';
canvas1.height = canvas1.clientHeight;
canvas1.width = canvas1.clientWidth;
let height = canvas1.height, width = canvas1.width;
export {height, width};
let ctx = canvas1.getContext('2d');

// Parameters

const timeStep = 1000/60;
let last; // last time step
let left = canvas1.style.left, right = canvas1.style.right, up = canvas1.style.top, down = canvas1.style.bottom;
let inGame = {'val' : false} // is canvas active
let cursor = {'X' : 0, 'Y' : 0}; // cursor positions
let prevCursor = {'X' : 0, 'Y' : 0}; // previous cursor positions
export {left, right, up, down, inGame, cursor, prevCursor};

// Device size check

if (/Mobi|Android/i.test(navigator.userAgent)) { // is mobile phone
}

// Variables

import {Audios, Images} from './utils.js'

import {board} from './domUtils.js'
board.style.opacity = 50 + '%';

// Main

import {user, cpu} from './utils.js'

function gameInit() {
    last = 0;
}
gameInit();

export default function animate(timeStamp) {
    const deltaTime = timeStamp - last;
    if(deltaTime >= timeStep) {
        user.update();
        user.draw();
        last = timeStamp - (deltaTime % timeStep);
    }
    requestAnimationFrame(animate);
    animate(0);
}