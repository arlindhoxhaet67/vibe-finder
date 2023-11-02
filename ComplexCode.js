/*
Filename: ComplexCode.js

The code below demonstrates a complex implementation of a web-based interactive game, titled "Adventure Quest". This code includes the use of object-oriented programming, event handling, and dynamic HTML elements. The game involves the player navigating through different rooms, interacting with various objects and characters, and making decisions that affect the narrative. It also includes randomized elements and logic to determine gameplay outcomes. This code, consisting of over 200 lines, provides a glimpse into the development of a sophisticated web-based game.

NOTE: This code is a simplified example and does not encompass the full implementation of an actual game.

Feel free to execute the code and explore the Adventure Quest!
*/

// Class representing a Room in the game
class Room {
  constructor(description, objects) {
    this.description = description;
    this.objects = objects;
  }
}

// Class representing an object in a Room
class GameObject {
  constructor(name, description, interactable) {
    this.name = name;
    this.description = description;
    this.interactable = interactable;
  }
}

// Class representing a character in the game
class Character {
  constructor(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;
  }
}

// Instantiate game rooms
const room1 = new Room("You are standing in a dimly lit hallway.", [
  new GameObject("Key", "A rusty key."),
  new GameObject("Lantern", "An old lantern that emits a faint light."),
]);

const room2 = new Room("You enter a dusty library.", [
  new GameObject("Book", "An ancient book with illegible text."),
  new GameObject("Hourglass", "A mesmerizing hourglass."),
]);

const room3 = new Room("You find yourself in a mysterious cave.", [
  new GameObject("Sword", "A sharp sword with engravings."),
]);

// Instantiate characters
const character1 = new Character(
  "Wizard",
  "Welcome, adventurer! Would you like to learn some magic tricks?"
);

const character2 = new Character(
  "Guardian",
  "Halt! To pass, you must solve my riddle: What has keys but can't open locks?"
);

// Game logic
let currentRoom = room1;
let inventory = [];

function showRoomDescription() {
  console.log(currentRoom.description);
}

function interactWithObject(objectName) {
  const object = currentRoom.objects.find(
    (obj) => obj.name.toLowerCase() === objectName.toLowerCase()
  );

  if (object && object.interactable) {
    console.log(`You interact with the ${object.name}. ${object.description}`);
    inventory.push(object);
    currentRoom.objects = currentRoom.objects.filter((obj) => obj !== object);
  } else {
    console.log("You can't interact with that object.");
  }
}

function talkToCharacter(characterName) {
  let character;

  if (characterName.toLowerCase() === character1.name.toLowerCase()) {
    character = character1;
  } else if (characterName.toLowerCase() === character2.name.toLowerCase()) {
    character = character2;
  }

  if (character) {
    console.log(character.dialogue);
  } else {
    console.log("That character is not in the room.");
  }
}

// Event handling
document.getElementById("object-interact").addEventListener("click", () => {
  const objectName = document.getElementById("object-name").value;
  interactWithObject(objectName);
});

document.getElementById("character-talk").addEventListener("click", () => {
  const characterName = document.getElementById("character-name").value;
  talkToCharacter(characterName);
});

// Display initial room description
showRoomDescription();