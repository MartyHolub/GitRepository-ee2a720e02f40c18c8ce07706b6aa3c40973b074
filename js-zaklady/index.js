console.log('CEST SVETE');

let jmeno = 'Martin';
console.log(jmeno);

const interestrate = 0.3;//const nelze menit
//interestrate = 1;
console.log(interestrate);

let vek = 17;
let JePravda = true;
let jmeno1 = undefined;
let vybranabarva = null;

let clovek = {
    jmeno: 'Tom',
    vek: 45
};

clovek.jmeno = 'Matej';

let vyber = 'jmeno';
clovek[vyber] = 'Elen';

console.log(clovek);

let vybraneBarvy = ['cervena', 'modra'];
vybraneBarvy[2] = 5;
console.log(vybraneBarvy.length);

function pozdav(jmeno, prijmeni) {
    console.log('Ahoj ' + jmeno  + ' ' + prijmeni);
}

function nadruhou(cislo){
    return cislo*cislo;
}
pozdav('Martine', 'Novák');
let number = nadruhou(2);
console.log(nadruhou(3));

