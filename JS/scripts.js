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

//Business Logic for Places ----
function Places(location, landmarks, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}

Places.prototype.locationMessage = function() {
  return "I have been to " + this.location + ", there we saw the " + this.landmarks + " during " + this.season;
}