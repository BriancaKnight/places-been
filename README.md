Describe: Places()

Test: It should create a constructor for places. 
Code: place(location, landmarks, timeOfYear)
Expected Results: location, landmarks, time of year.

Test: It should add a location message. 
Code: place.locationMessage();
Expected Results: "I have been to " + Place

Describe: WorlTravel();

Test: It will create a global function.
Code: WorldTravel;
Expected Results:function WorldTravel () {
                            this.Places = {};
                  }

Test: It will add Places to WorldTravel.
Code: worldTravel.addPlace(paris)
Expected Results: WorldTravel{
Paris
}

Test: It will ammend the location message to include location, landmarks, and season.
Code: paris.locationMessage();
Expected Results: "I have been to Paris, there we saw the Eiffle Tower during Fall."

Test: It will create unique IDs Places.
Code: WorldTravel.prototype.assignId
Expected Results: Paris[0]

Test:
Code:
Expected Results:

Test:
Code:
Expected Results: