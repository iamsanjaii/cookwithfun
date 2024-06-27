const HighlightColor = "#66fcf1";

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto", {
    strings: ["to", "Cook with Fun 2.0"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });
});

let selectedIngredients = new Set();

const ingredients = document.querySelectorAll(".square");

ingredients.forEach((i) => {
  i.addEventListener("click", () => {
    const ingName = i.querySelector("p").textContent.trim();

    if (selectedIngredients.has(ingName)) {
      i.style.backgroundColor = "";
      i.style.color = "";
      selectedIngredients.delete(ingName);
    } else {
      i.style.backgroundColor = HighlightColor;
      i.style.color = "black";
      selectedIngredients.add(ingName);
    }

    setTimeout(() => {
      i.style.backgroundColor = "";
      i.style.color = "";
    }, 8000);
  });
});

const GiveRecipe = document.getElementById("recipe-btn");
GiveRecipe.addEventListener("click", function () {
  let newRecipe;
  for (const i in recipes) {
    const recipe = recipes[i];
    const recipeIng = recipe.ingredients;
    if (recipeIng.every((ingredient) => selectedIngredients.has(ingredient))) {
      newRecipe = recipe;
      break;
    }
  }
  if (newRecipe) {
    var typed = new Typed(".recipe-tutorial", {
      strings: [
        "Ingredients Required :" +
          newRecipe.ingredients +
          "\nRecipe:" +
          "\n" +
          newRecipe.instructions,
      ],
      typeSpeed: 50,
      loop: false,
      onComplete: function () {
        console.log(selectedIngredients);
        selectedIngredients.clear();
        console.log(selectedIngredients);
      },
    });
  } else {
    alert("No Recipe ḥas been found ");
    return true;
  }
});
