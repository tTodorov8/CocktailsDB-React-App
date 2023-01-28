import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const cocktailDbUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
function SelectedCocktail() {
  const { id } = useParams();
  // const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    // setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${cocktailDbUrl}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: alcohol,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
            strIngredient5: ingredient6,
            strIngredient5: ingredient7,
            strIngredient5: ingredient8,
            strIngredient5: ingredient9,
            strIngredient5: ingredient10,
          } = data.drinks[0];
          const ingredients = [
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            ingredient6,
            ingredient7,
            ingredient8,
            ingredient9,
            ingredient10,
          ];
          console.log(ingredients);
          const newCocktail = {
            name,
            image,
            alcohol,
            glass,
            instructions,
            ingredients,
          };
          console.log(newCocktail.ingredients);
          setCocktail(newCocktail);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);
  if (!cocktail) {
    return <h2>Loading...</h2>;
  }
  const { name, image, alcohol, glass, instructions, ingredients } = cocktail;

  return (
    <div className="selected-cocktail-wrapper">
      <img src={image} alt="" />
      <div className="cocktail-description">
        <h2>
          <b>Name:</b> {name}
        </h2>
        <h3>
          <b>Glass:</b> {glass}
        </h3>
        <h3>
          <b>Type:</b> {alcohol}
        </h3>
        <p>
          <b>Instructions:</b> {instructions}
        </p>
        <div className="ing">
          Ingredients:
          {ingredients.map((ingredient, index) => {
            return ingredient ? (
              <div key={index} className="ingredients">
                {index + 1}. {ingredient}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectedCocktail;
