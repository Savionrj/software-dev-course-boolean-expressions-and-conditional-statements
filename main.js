/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You discover a strange horn buried beneath the mountain snow.")
  let hasHorn = readline.question("Do you 'keep' the horn or 'discard' it?");

  if (hasHorn === "keep") {
    console.log("You place the horn in your satchel for safekeeping.")
  }
  else {
    console.log("You move on, leaving the horn behind.")
  }

  console.log("You safely navigate through the dark mountains.");
  console.log("While preparing for camp at night, you hear a strange sound from the woods");
  const seekSound = readline.question("Do you 'investigate' this sound or 'ignore' it?");


  if (seekSound !== 'investigate') {
    console.log("You continue to mind you business and nothing bad ever happens again.\nThe End.")
  }
  else if (seekSound === 'investigate') {
    console.log("You move towards the sound, only for it to stop.\nThen, without a moments notice, a large furred creature crawls out from behind a tree.\nBigfoot.\nHe's found you.");

    const reactToBigfoot = readline.question("Do you 'fight' or 'flee' from Bigfoot, your oldest nemesis?");

    if (reactToBigfoot === 'flee') {
      console.log("You attempt to run from the nightmare. But you can't outrun this monster.\nBigfoot catches you. And you're never seen again.\nThe End.");
    }
    else if (reactToBigfoot === 'fight' && (hasSword === true)) {
      console.log("Your sword is no match for Bigfoot. He flicks it aside as if it were a flee.\nBigfoot grabs you. And you're never seen again.\nThe End.");
      hasSword = false;
    }
    else if (reactToBigfoot === 'fight' && (hasSword !== true) && (hasHorn === 'discard')) {
      console.log("You brace yourself for the inevitable.\nBut then you remember...\nThe torch!\nYou raise the torch high above your head. Fire was always the cryptid's natural foil.\nBigfoot retreats into the forest. You'll survive this night.\nThe End.");
    }
    else if (reactToBigfoot === 'fight' && (hasSword !== true) && (hasHorn === 'keep')) {
      console.log("You reach into your satchel searching for anything to fight with. Then you feel the horn.\nYou pull it out, ready to chuck it at the monster in front of you. But then you get an idea.\nYou place the horn to your mouth, and begin to play an old melody.\nThe horn begins to glow.\nBefore you know, the forest giant is hypnotized by the mystical sound.\nHe falls over, entering a deep slumber.\nYou'll survive this night.\nThe End.");
    }
  }


}
else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
}
else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
}
else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
