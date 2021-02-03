import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const IngredientsContext = createContext();

const IngredientsProvider = (props) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const res = await axios.get(URL);
      setIngredients(res.data.drinks);
    };
    getIngredients();
  }, []);

  return (
    <IngredientsContext.Provider value={{ ingredients }}>
      {props.children}
    </IngredientsContext.Provider>
  );
};

export default IngredientsProvider;
