import React, { useContext } from 'react';
import Drink from './Drink';
import Spinner from './Spinner';

import { DrinksContext } from '../context/Drinks';

const DrinksListing = () => {
  const { drinks, loading } = useContext(DrinksContext);

  return (
    <div className="drinks row mt-5">
      {loading ? <Spinner /> : null}
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default DrinksListing;
