//Business Logic for WorldTravel ----
function WorldTravel() {
    this.places = {};
}

WorldTravel.prototype.addPlace = function(place) {
    this.places[place.location] = place;
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

