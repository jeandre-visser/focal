const diceRoller = function(numberOfRolls) {
  let random = [];
  for(let i = 1; i <= numberOfRolls; i++) {
    random.push(Math.floor(Math.random() * (7 - 1) + 1));
  }
  return `Rolled ${numberOfRolls} Dice: ${random.join(', ')}`
}


const numberOfRolls = process.argv[2];
console.log(diceRoller(numberOfRolls)); 