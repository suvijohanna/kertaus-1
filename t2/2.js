'use strict';

const x1 = +prompt('Koordinaatti 1 x');
const y1 = +prompt('Koordinaatti 1 y');
const x2 = +prompt('Koordinaatti 2 x');
const y2 = +prompt('Koordinaatti 2 y');

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.getElementById('kohde').innerHTML = distance;
