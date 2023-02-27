// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // This is the format of the innerHTML for the missionTarget div, which you can locate using the document parameter of addDestinationInfo(). addDestinationInfo() does not need to return anything.

    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = // Here is the HTML formatting for our mission target div. This formats and adds info about a selected planet to the DOMException.
    `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: star </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
}
function validateInput(testInput) {
    let numInput = Number(testInput);

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numInput)) {
        return "Not a Number";
    } else if (isNaN(numInput) === false) {
        return "Is a Number"
    }
}

function formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel, launchStatus, pilotStatus, copilotStatus, fuelStatus, cargoStatus) {

    if (validateInput(pilot) === "empty" || validateInput(copilot) === "empty" || validateInput(fuelLevel) === "empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Make sure to enter valid information for each field");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field");
    } else {

        if (Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            if (Number(fuelLevel) < 10000){
                fuelStatus.innerHTML = "Fuel level too low for launch";
            }
            if (Number(cargoLevel) > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            }
        } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is Ready for launch";
            faultyItems.style.visibility ='visible';
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        }
    }
}

async function myFetch() {
    //fetches a list of planets
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    })
    return planetsReturned;
}

function pickPlanet(planets) {
    //selects a planet from the returned data.
    //pickPlanet() takes in one argument: a list of planets.
    // Using Math.random(), return one planet 
    let randNum = Math.floor(Math.random() * planets.length);
    let planet = planets[randNum];
    return planet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
