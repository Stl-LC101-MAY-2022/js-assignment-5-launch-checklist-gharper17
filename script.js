// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");


// ALL EVENT LISTENERS WILL HAPPEN HERE 
// FETCH LISTED PLANET RESPONSE (MY FETCH )

// let listedPlanetsResponse = myFetch(); <=== TIP!!
// MAKE VARIABLE FOR SELECTED PLANET THEN CALL PICK PLANET FUNCTION 

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets); //goes through list of planets versus those picked 
       console.log(selectedPlanet); 
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
   })
   //CREATE THE LIST OF ITEMS, CREATE VARIABLE FOR THE FORM: FOR ITEMS AND QUERY SELECTOR/FORM
   // id = "faultyItems"      // querySelector("form")
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilot]"); 
      //NOTE TO SELF: can use .querySelector "qS is a broader selector" or .getElememtById "only can search for ID"
      let coPilotNameInput = document.querySelector("input[name=copilot]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoLevelInput = document.querySelector("input[name=cargoLevel]");

      event.preventDefault();

      let list = document.getElementsById("faultyItems");
      let pilot = pilotInput.value;
      let copilot = copilotInput.value;
      let fuelLevel = fuelLevelInput.value;
      let cargoLevel = cargoLevelInput.value;
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

});
});
