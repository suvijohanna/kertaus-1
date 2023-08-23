'use strict';

const s1 = +prompt('Anna kolmion sivun 1 pituus');
const s2 = +prompt('Anna kolmion sivun 2 pituus');
const s3 = +prompt('Anna kolmion sivun 3 pituus');

let tyyppi = '';

// jos kaikki sivut yhtä pitkiä, tasasivuinen kolmio
if (s1 === s2 && s2 === s3) {
  //console.log('tasasivuinen');
  tyyppi = 'tasasivuinen kolmio';
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  // jos kaksi sivua ovat yhtä pitkiä, tasakylkinen kolmio
  //console.log('tasakylkinen');
  tyyppi = 'tasakylkinen kolmio';
} else {
  // jos sivut ovat eri pituisia, epäsäännöllinen kolmio
  //console.log('epäsäännöllinen');
  tyyppi = 'epäsäännöllinen kolmio';
}

//document.getElementById('kohde').innerHTML = tyyppi;

document.getElementById('kohde').insertAdjacentHTML('beforeend', tyyppi);
