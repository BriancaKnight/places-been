//Business Logic for WorldTravel ----
function WorldTravel() {
    this.places = {};
    this.currentId = 0;
}

WorldTravel.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};

WorldTravel.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

WorldTravel.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

//Business Logic for Places ----
function Places(location, landmarks, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}

Places.prototype.locationMessage = function() {
  return "I have been to " + this.location + ", there we saw the " + this.landmarks + " during " + this.season;
};

//UI Logic
let worldTravel = new WorldTravel();

function listPlace(placesToDisplay) {
  let placesDiv = document.querySelector("div#places");
  placesDiv.innerText = " ";
  const ul = document.createElement("ul");
  Object.keys(placesToDisplay.places).forEach(function(key){
    const place = placesToDisplay.findPlace(key);
    const li = document.createElement("li");
    li.append(place.locationMessage());
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  placesDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedLocation = document.querySelector("#newLocation").value; 
  const inputtedLandmarks = document.querySelector("#newLandmarks").value; 
  const inputtedSeason = document.querySelector("#newSeason").value; 
  let newPlace = new Places(inputtedLocation, inputtedLandmarks, inputtedSeason);
  worldTravel.addPlace(newPlace);
  listPlace(worldTravel);
  console.log(worldTravel.places);
}


window.addEventListener("load", function (){
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});