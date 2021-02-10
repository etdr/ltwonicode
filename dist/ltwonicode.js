"use strict";
const Flip = require('./fx/flip');
const Creep = require('./fx/creep');
class LTwonicode {
    constructor() {
        this.flip = new Flip();
        this.creep = new Creep();
    }
}
module.exports = new LTwonicode();
