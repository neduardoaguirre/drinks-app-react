import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DrinksContext = createContext();

const DrinksProvider = (props) => {
  const [query, setQuery] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const getDrinks = async () => {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
        const res = await axios.get(URL);
        setLoading(false);
        setDrinks(res.data.drinks);
        scroll();
      };
      getDrinks();
      setQuery(false);

      return () => {
        setDrinks([]);
      };
    }
  }, [search, query]);

  const scroll = () => {
    const position = document.querySelector('.drinks');
    position.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <DrinksContext.Provider
      value={{ drinks, loading, setSearch, setQuery, setLoading }}
    >
      {props.children}
    </DrinksContext.Provider>
  );
};

export default DrinksProvider;
