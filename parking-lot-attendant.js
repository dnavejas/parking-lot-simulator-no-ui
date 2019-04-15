'use strict'


let highway = [];

function spotsAvailable(){
    let space = numberOfSpots - parkingLot.length;
    return space;
}

function parkCar(){
    for(let i = 0; i < streetQueue.length; i++){
        if (spotsAvailable() !== 0){
            var car = streetQueue.pop();
            parkingLot.push(car); 
            setTimeout(leave, car.time, car.licenseplate);
            // console.log("Parking car!", car)
        }   
    }

}
function leave(){
    let carPosition = parkingLot.map(function(car) {
        return parkingLot.indexOf(car.licenseplate);
    })
    // let carPosition = carP
    // console.log(carPosition);
    let car = parkingLot.splice(carPosition, 1)[0];
    highway.push(car);

    console.log("Cars Leaving", car)
}
function noMoreCars(){
    let x = streetQueue.length;
    let y = parkingLot.length;

    if(x == 0 && y == 0){
        clearInterval(intervalId);
    }

}

let intervalId = setInterval(function() {
    parkCar();
    noMoreCars();
    console.clear();
    console.log(`StreetQueue: ${streetQueue.length}`);
    console.log(`ParkingLot: ${parkingLot.length}`);
    console.log(`Highway: ${highway.length}`);
    console.log(streetQueue);
    console.log(parkingLot);
    console.log(highway);



}, 250)
