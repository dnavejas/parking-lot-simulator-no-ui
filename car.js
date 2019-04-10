'use strict';

function randomYear(y){
    var y = Math.floor(Math.random() * 19) + 2000;
    return y;
}

function randomTime(t){
    var t = Math.floor(Math.random() * 4000) + 1000;
    return t;
}

let arrMake = [
    'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Dodge', 'Jeep', 'Kia', 'Lincoln', 'Range Rover', 'Tesla'
    ]
function randomMake(arrMake){ 
    let min = 0;
    let max = (arrMake.length - 1);
    let randMake = Math.floor(Math.random() * (max - min));
    return arrMake[randMake];
}

let arrColor = [
    'blue', 'yellow', 'red', 'green', 'black', 'silver', 'orange', 'white'
]
function randomColor(arrColor){
    let min = 0;
    let max = (arrColor.length - 1);
    let randColor = Math.floor(Math.random() * (max - min));
    return arrColor[randColor];
}

function randomLP (lp){
    var l = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

    while (l.length < 7) {
        l += possible[Math.floor(Math.random() * possible.length)];
    } 
    return l
}

function Car(color, year, make, licensePlate, time){
    this.color = randomColor(arrColor);
    this.year = randomYear();
    this.make = randomMake(arrMake); 
    this.licensePlate = randomLP();
    this.time = randomTime ();
};

function carFactory (i){
    for (i = 0; i <100; i++){
        let car = new Car();
        carQueue.push(car);
    }
    return carQueue;
}
carFactory()
console.log(carQueue)