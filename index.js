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

// #### Challenge 5
let currentHour = 22;

let shouldDrinkMonster = currentHour >= 7 && currentHour < 24 ? "Unleash the beast!" : "Better stick to water.";

console.log(shouldDrinkMonster);