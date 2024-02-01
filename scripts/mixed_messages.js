/*--------------------
 Recipe Idea Generator
---------------------*/
// Arrays to pick from
const cookingArray = ['Pan fried', 'Grilled', 'Baked', 'Roasted', 'Stewed', 'Steamed']
const mainArray = ['chicken', 'salmon', 'mackeral', 'tofu', 'aubergine', 'lamb'];
const vegArray = ['kale', 'cabbage', 'asparagus', 'broccoli', 'carrot', 'peppers'];
const starchArray = ['potatoes', 'rice', 'noodles', 'couscous', 'pasta', 'quinoa'];

// Callback function for random choice from each array passed to it
const randomChoice = arr => {
  randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
}

// Calls 'randomChoice' on each array and compiles the result
const createRecipe = () => {
  const cooking = randomChoice(cookingArray);
  const main = randomChoice(mainArray);
  const veg = randomChoice(vegArray);
  const starch = randomChoice(starchArray);
  let output = `${cooking} ${main} with ${veg} on ${starch}`;
  return output;
}

/*---------------
 DOM Interactions
----------------*/
// Query Selectors
const generateButton = document.querySelector('#generate-button');
const generatedIdea = document.querySelector('#generated-idea');
const pinButton = document.querySelector('#pin-button');
const returnedRecipe = document.querySelector('#returned-recipe');
const pinnedSection = document.querySelector('.pinned');
const list = document.querySelector('ul');
const clearButton = document.querySelector('#clear-button');
let pinIdea = ''; // Placeholder
let pinnedToPage = ''; // Placeholder

// Creates recipe and adds to 'generatedIdea' page element
generateButton.addEventListener('click', function () {
  let recipeIdea = createRecipe();
  generatedIdea.textContent = recipeIdea;
  pinIdea = recipeIdea;
  pinButton.removeAttribute('disabled', '');
});

// Unhides section with text and generated idea
generateButton.addEventListener('click', function () {
  returnedRecipe.classList.toggle('hide'), pinButton.classList.toggle('hide')
}, { once: true });

// Adds generated idea to pinned section
pinButton.addEventListener('click', function () {
  pinnedToPage = document.createElement('li');
  pinnedToPage.textContent = pinIdea;
  pinnedToPage.setAttribute('class', 'pinned-post')
  list.append(pinnedToPage);
  pinButton.setAttribute('disabled', '');
});

// Unhides pinned section
pinButton.addEventListener('click', function () {
  pinnedSection.classList.toggle('hide')
}, { once: true });

// Clears pinned section
let pinnedPosts = list.getElementsByClassName('pinned-post');

clearButton.addEventListener('click', function() {
  while (pinnedPosts.length !== 0) {
    console.log(pinnedPosts);
    list.removeChild(pinnedPosts[0]);
    console.log(pinnedPosts);
  };
});

