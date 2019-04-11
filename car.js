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

    this.park = function (car){
        
        console.log("car parked");
        setTimeout(car.leave, car.time, car.licensePlate);
    }

    this.leave = function (){
        let carPosition = parkingLot.map(function(x) {return (x.licensePlate); }).indexOf(licensePlate);
            let car = parkingLot.splice(carPosition, 1)[0];
            highway.push(car);
        console.log("car left");

    }
};

function carFactory (i){
    for (i = 0; i <100; i++){
        let car = new Car();
        streetQueue.push(car);
    }
    return streetQueue;
}