// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

let order = [];
order.push("Planning");
order.push("Analysis of Requirements");
order.push("Design");
order.push("Implementation");
order.push("Testing & Integration");
order.push("Maintain");
console.log(order);

/*
[
  'Planning',
  'Analysis of Requirements',
  'Design',
  'Implementation',
  'Testing & Integration',
  'Maintain'
]
*/


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added."
const analysisOfRequrements = "Working off the last step, making sure you (and your team) are able to achieve the goals of the project with the tools you have. If not, what needs to be done to be prepared";
const design = "Using last two steps. How do you want to structure the project with the tools you have at hand?";
const implementation = "Putting the last three steps together, it's time to get to work. Being prepared will take many of the unknowns out of this step";
const TestingAndIntegration = "Making sure everything that you put together provides a user friendly and functional experience to anyone using it. Testing extreme cases to find flaws in your work before any one else does";
const maintain = "What needs to be done to keep this project's function. Using your own testing and feedback of users, how can this poject reach it's max potential?";

const steps = [planning,analysisOfRequrements,design,implementation,TestingAndIntegration,maintain];
console.log(steps);

/*
[
  'This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.',
  'Working off the last step, making sure you (and your team) are able to achieve the goals of the project with the tools you have. If not, what needs to be done to be prepared',
  'Using last two steps. How do you want to structure the project with the tools you have at hand?',
  "Putting the last three steps together, it's time to get to work. Being prepared will take many of the unknowns out of this step",
  'Making sure everything that you put together provides a user friendly and functional experience to anyone using it. Testing extreme cases to find flaws in your work before any one else does',
  "What needs to be done to keep this project's function. Using your own testing and feedback of users, how can this poject reach it's max potential?"
]
*/