// #### Challenge 1
let userPreference ="";
let preferredMonsterDrink = userPreference ? "Sugar-free" : "Regular";

console.log(`The user prefers: ${preferredMonsterDrink}`);

// #### Challenge 2
let regularStock = 4;
let sugarFreeStock = 6;

let regularStockStatus = regularStock < 5 ? "Time to restock regular Monster!" : "We're stocked on regular Monster.";
let sugarFreeStockStatus = sugarFreeStock < 5 ? "Time to restock sugar-free Monster!" : "We're stocked on sugar-free Monster.";

console.log(regularStockStatus);
console.log(sugarFreeStockStatus);

// #### Challenge 3
let heartRate = 95;

let monsterBoost = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";

console.log(monsterBoost);

// #### Challenge 4
let currentTemp = 4;

let serveCondition = currentTemp >= 5 ? "Chilled to perfection!" : "Needs a cooler!"

console.log(serveCondition);
debugger
// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.