import { useState, useEffect, useRef } from "react";
import "../assets/style.scss";
import CocktailCard from "../components/CocktailCard";
import CocktailFinder from "../components/CocktailFinder";
const cocktailDbUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = useRef("");

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch(`${cocktailDbUrl}${searchTerm}`);
        const data = await response.json();
        console.log(data.drinks);
        setCocktails(data.drinks);
      } catch (error) {
        console.log(`error`);
      }
    };
    fetchDrinks();
  }, [searchTerm]);
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
    console.log(searchTerm);
  }

  return (
    <>
      <div className="cocktail-homepage-wrapper">
        <section className="cocktail-input">
          <form action="" className="search-form">
            <label htmlFor="name">Search for a cocktail !</label>
            <input
              type="text"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </form>
        </section>
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
        </div>
      </div>
    </>
  );
}

export default Home;
