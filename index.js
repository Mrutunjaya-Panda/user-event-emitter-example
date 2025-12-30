import events from "events";

class FitnessTracker extends events.EventEmitter {
    // here EventEmitter is a class from events module that allows us to create and handle custom events
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Write code to update the progress and emit a 'goalReached' event when the goal is reached
    this.progress += exercise.caloriesBurned;
    console.log(`Added exercise: ${exercise.name}, Calories burned: ${exercise.caloriesBurned}, Total progress: ${this.progress}`);
    if(this.progress >= this.goal){
         this.emit("goalReached", this.progress); // Emit event when goal is reached to notify listeners with current progress
        //this.emit("goalReached"); 
    }
  }
}

const Solution = () => {
  // define  listener that sends a congratulatory message to the user upon reaching their fitness goal
   const tracker = new FitnessTracker();
   tracker.on("goalReached", (progress) => {
     console.log(`Congratulations! You've reached your fitness goal with a total of ${progress} calories burned!`);
    //console.log(`Congratulations! You've reached your fitness goal.`);
   });

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
