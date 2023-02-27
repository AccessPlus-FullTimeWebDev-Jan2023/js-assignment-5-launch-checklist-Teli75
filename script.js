// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
// let listedPlanets;
let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below call helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       console.log(randomPlanet.name);
       let addDestination = addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
       console.log(addDestination);
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
    event.preventDefault();
   let pilot = document.querySelector("input[name=pilotName]").value;
   let copilot = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   let cargoLevel = document.querySelector("input[name=cargoMass]").value;
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");


    formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel, launchStatus, pilotStatus, copilotStatus, fuelStatus, cargoStatus);
   })
});