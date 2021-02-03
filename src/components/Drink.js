import React, { useContext, useState } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import ImageNotAvailable from '../images/not-available.png';

import { RecipesContext } from '../context/Recipes';

const Drink = ({ drink }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const { setIdDrink } = useContext(RecipesContext);

  return (
    <div className="col-md-6 col-lg-4 mb-3 align-self-center">
      <div className="card">
        <h3 className="card-header">{drink.strDrink}</h3>
        {drink.strDrinkThumb ? (
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="card-img-top"
          />
        ) : (
          <img
            src={ImageNotAvailable}
            alt="Not available"
            className="card-img-top"
          />
        )}

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdDrink(drink.idDrink);
              handleOpen();
            }}
          >
            See Details
          </button>
          <Recipe open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Drink;
