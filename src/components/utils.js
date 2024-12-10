let Images = {
    'board' : new Image()
}

Images['board'].src = 'board.png';

let Audios = {}

export {Images, Audios};
import {inGame, cursor, prevCursor} from "./main.js";
import {canvas1} from "./domUtils.js";

let ctx = canvas1.getContext('2d');

class User {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.prevX = 0;
        this.prevY = 0;
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;
    }
    update() {
        if(inGame['val']) {
            let xDif = cursor['X'] - prevCursor['X'], yDif = cursor['Y'] - prevCursor['Y'];
            this.x += xDif;
            this.y += yDif;
        }
    }
    draw() {
        ctx.drawImage(Images['board'], this.x, this.y, 5, 5);
    }
}
let user = new User();
export {user};

class CPU {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.prevX = 0;
        this.prevY = 0;
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
        this.prevX = x;
        this.prevY = y;
    }
    update() {}
    draw() {}
}
let cpu = new CPU();
export {cpu};