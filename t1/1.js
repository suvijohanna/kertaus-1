'use strict';

const asteetC = +prompt('Syötä celsiusasteet');

const asteetF = (asteetC * 9) / 5 + 32;
const asteetK = asteetC + 273.15;

const vastaus = `${asteetC} astetta celsiusta on ${asteetF} astetta fahrenheitina ja ${asteetK} astetta kelvininä`;

document.getElementById('kohde').innerHTML = vastaus;
