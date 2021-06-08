"use strict";

// Solution 1
function cakes(recipe, available) {
  let count = 0;
  
  let parts = 0;
  
  let hasEnoughToMakeFood = true;
  
  for (let [ingredient, needed] of Object.entries(recipe)) {
    if (!available.hasOwnProperty(ingredient)) {
      return count;
    } 
  }
  
  while (hasEnoughToMakeFood) {
    for (let [ingredient, needed] of Object.entries(recipe)) {
      if (available[ingredient] >= needed) {
        available[ingredient] = available[ingredient] - needed;
        console.log(ingredient, available[ingredient])
        parts += 1;
        if (parts === Object.entries(recipe).length) {
          parts = 0;
          count += 1;
        }
      } else if (available[ingredient] < needed) {
        hasEnoughToMakeFood = false;
        return count;
      }
    }
  }

  return count;
}

// Solution 2
function cakes(recipe, available) {
  var numCakes = [];
  
  for (let key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
}

// Solution 3
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}
