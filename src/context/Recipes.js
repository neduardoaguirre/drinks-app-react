import React, { createContext, useEffect, useState } from 'react';
import ImageNotAvailable from '../images/not-available.png';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [idDrink, setIdDrink] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idDrink) return;
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
      const res = await axios.get(URL);
      if (!res.data.drinks[0].strDrinkThumb) {
        res.data.drinks[0].strDrinkThumb = ImageNotAvailable;
      }
      setRecipe(res.data.drinks[0]);
    };
    getRecipe();

    return () => {
      setRecipe({});
    };
  }, [idDrink]);

  return (
    <RecipesContext.Provider value={{ recipe, setIdDrink }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
