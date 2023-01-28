import { useState, useEffect } from "react";
import "../assets/style.scss";
import CocktailCard from "../components/CocktailCard";
import CocktailFinder from "../components/CocktailFinder";
const cocktailDbUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const fetchDrinks = async () => {
    try {
      const response = await fetch(cocktailDbUrl);
      const data = await response.json();
      console.log(data.drinks);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(`error`);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, []);
  console.log(cocktails);

  return (
    <>
      <div className="cocktail-homepage-wrapper">
        <CocktailFinder className="cocktail-input" />
        <div className="cocktail-items">
          {cocktails.map((cocktail, index) => (
            <CocktailCard
              key={index}
              name={cocktail.strDrink}
              glass={cocktail.strGlass}
              type={cocktail.strAlcoholic}
              image={cocktail.strDrinkThumb}
              id={cocktail.idDrink}
            />
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Home;
