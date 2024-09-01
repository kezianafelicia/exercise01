
let _length: number = 5;
let _width: number = 3;

// no.1
let _area: number = _length * _width;
console.log(_area);

// no.2
let _perimeter = 2 * (_length + _width);
console.log(_perimeter);


let _radius: number = 5;
let diameter = 2 * _radius;

//no.3
console.log(diameter);

let a = 80;
let b = 65;
let angles = 180 - a -b;

//no.4
console.log(angles);



function daytoyear(angka: number) {
  let months: number = 0
  let years: number = 0;
  let days: number = 0
  while (angka > 365) {
    angka -= 365;
    years ++;
  }
  while (angka > 30) {
    console.log(angka);
    angka -= 30;
    months++
  }
  days = angka;

  console.log(`years: ${years}, months: ${months}, day: ${days}`);
}

//no.5
daytoyear(400);
daytoyear(366);
