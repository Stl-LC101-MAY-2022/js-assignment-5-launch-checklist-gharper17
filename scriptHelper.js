// Write your helper functions here!
// ALL FUNCTIONS HERE 
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`//the JSON file pulls the URL for the IMG, link in the assignment 
  
}

function validateInput(testInput) {
    //return EMPTY, make an array[] for the answers from the form to cross check 
    // Array[] isnt the way should be able to do if statements 
    //use If else statements to determine the validation 
    if(testInput === " "){
        return "Empty"
    }else if (isNaN(testInput) === false){
        return "Is a Number"
    }else{
        return "Not a Number"
    }
   };

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let h2 = document.getElementById("launchStatus");



// https://rgbacolorpicker.com/

   if (fuelLevel < 10000 && cargoLevel > 10000) {
    list.style.visibility= "visible";
    h2.style.color = "rgb(249, 15, 15)"; 
    h2.innerHTML = "Shuttle Not Ready for Launch";  
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo weight too heavy for launch";     
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

} else if (fuelLevel < 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(249, 15, 15)"; 
    h2.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo weight low enough for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;


} else if (fuelLevel <= 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(249, 15, 15)"; 
    h2.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo too HEAVY for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
// TIME TO BURN *VALKERIE VOICE* 
} else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(15, 249, 77)"; 
    h2.innerHTML = "TIME TO BURN!!!!";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo weight low enough for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
} 
}; 

async function myFetch() {
   let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    return response.json(); 
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    Math.floor(Math.random(planets) * planets.length); 
    let newPlanet = Math.floor(Math.random(planets) * planets.length); 
    console.log(newPlanet); 
    return planets[newPlanet];  
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
