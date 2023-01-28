import React from "react";
import { Link } from "react-router-dom";
function CocktailCard({ name, glass, type, image, id }) {
  return (
    <div className="cocktail-card">
      <img src={image} alt="cocktailImage" />
      <div className="card-title-details">
        <h1>{name}</h1>
        <h2>{glass}</h2>
        <h3>{type}</h3>
        <Link to={`cocktail/${id}`} className="detail-button">
          <button>Details</button>
        </Link>
        {/* <DetailButton /> */}
      </div>
    </div>
  );
}

export default CocktailCard;
