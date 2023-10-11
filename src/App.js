import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CocktailApp = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  const fetchRandomCocktail = async () => {
    try {
      const response = await axios.get('..APIKEY HERE...');
      const randomCocktail = response.data.drinks[0];
      setCocktail(randomCocktail);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Random Cocktail</h1>
      <button onClick={fetchRandomCocktail}>Give Me Another Cocktail</button>
      {cocktail ? (
        <div>
          <h2>Drink: {cocktail.strDrink}</h2>
          <h2>Does this contain alcohol? {cocktail.strAlcoholic}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', height: '200px' }} />
          <p>Served as: {cocktail.strInstructions}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default CocktailApp;
