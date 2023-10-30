function WorldTravel() {
    this.Place = {};
}

function Place(location, landmarks, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}

Place.prototype.locationMessage = function() {
  return "I have been to " + this.location;
};

