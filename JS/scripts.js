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
}

//UI Logic
let worldTravel = new WorldTravel();

function handelFormSubmission(event) {
  event.preventDefault();

}

window.addEventListener("load", function (){

});