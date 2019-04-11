'use strict'

let streetQueue = [];
let highway = [];

carFactory()

function parkCar(){
    for(let i = 0; i < numberOfSpots; i++){
        if (spotsAvailable !== 0){
            var car = streetQueue.pop();
            parkingLot.push(car);
            car.park(car);
        }
        else {
            alert ("Parking lot is full!");
        }
    }
}
let intervalId = setInterval(function() {
    parkCar();
    console.clear();
    console.log(`StreetQueue: ${streetQueue.length}`);
    console.log(`ParkingLot: ${parkingLot.length}`);
    console.log(`Highway: ${highway.length}`);
    console.log(streetQueue);
    console.log(parkingLot);
    console.log(highway);
}, 250);
