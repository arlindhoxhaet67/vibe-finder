/*
Filename: ComplexCraftingSystem.js
Content: A complex crafting system that allows players to combine various ingredients to create new items with different attributes and abilities.
*/

// Ingredient class represents the ingredients used in crafting
class Ingredient {
  constructor(name, attribute) {
    this.name = name; // name of the ingredient
    this.attribute = attribute; // attribute of the ingredient
  }
  
  // Getters and setters for name and attribute
  getName() {
    return this.name;
  }
  getAttribute() {
    return this.attribute;
  }
  setName(name) {
    this.name = name;
  }
  setAttribute(attribute) {
    this.attribute = attribute;
  }
}

// Item class represents the crafted items
class Item {
  constructor(name, attributes) {
    this.name = name; // name of the item
    this.attributes = attributes; // array of attributes
  }
  
  // Getters and setters for name and attributes
  getName() {
    return this.name;
  }
  getAttributes() {
    return this.attributes;
  }
  setName(name) {
    this.name = name;
  }
  setAttributes(attributes) {
    this.attributes = attributes;
  }
}

// CraftingSystem class represents the crafting system
class CraftingSystem {
  constructor() {
    this.recipeBook = {}; // object to store the crafting recipes
  }
  
  // Add a new recipe to the recipe book
  addRecipe(result, ingredients) {
    this.recipeBook[result] = ingredients;
  }
  
  // Craft an item based on the recipe book
  craftItem(result) {
    if (result in this.recipeBook) {
      const ingredients = this.recipeBook[result];
      // Combine the attributes of the ingredients
      const combinedAttributes = ingredients.reduce((acc, ingredient) => {
        return acc.concat(ingredient.getAttribute());
      }, []);
      return new Item(result, combinedAttributes);
    }
    return null; // return null if the recipe doesn't exist
  }
}

// Creating ingredient instances
const ingredientA = new Ingredient("Ingredient A", "Attribute A");
const ingredientB = new Ingredient("Ingredient B", "Attribute B");
const ingredientC = new Ingredient("Ingredient C", "Attribute C");
const ingredientD = new Ingredient("Ingredient D", "Attribute D");
const ingredientE = new Ingredient("Ingredient E", "Attribute E");

// Creating a crafting system instance
const craftingSystem = new CraftingSystem();

// Adding recipes to the crafting system
craftingSystem.addRecipe("Result X", [ingredientA, ingredientB]);
craftingSystem.addRecipe("Result Y", [ingredientB, ingredientC]);
craftingSystem.addRecipe("Result Z", [ingredientC, ingredientD, ingredientE]);

// Crafting items using the crafting system
const craftedItemX = craftingSystem.craftItem("Result X");
const craftedItemY = craftingSystem.craftItem("Result Y");
const craftedItemZ = craftingSystem.craftItem("Result Z");

// Logging the crafted items
console.log(craftedItemX);
console.log(craftedItemY);
console.log(craftedItemZ);

// Output:
// Item { name: 'Result X', attributes: [ 'Attribute A', 'Attribute B' ] }
// Item { name: 'Result Y', attributes: [ 'Attribute B', 'Attribute C' ] }
// Item { name: 'Result Z', attributes: [ 'Attribute C', 'Attribute D', 'Attribute E' ] }