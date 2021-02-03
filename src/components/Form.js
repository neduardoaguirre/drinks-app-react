import React, { useContext, useState } from 'react';
import Error from './Error';

import { IngredientsContext } from '../context/Ingredients';
import { DrinksContext } from '../context/Drinks';

const Form = () => {
  const { ingredients } = useContext(IngredientsContext);
  const { setSearch, setQuery, setLoading } = useContext(DrinksContext);

  const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient === '') {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setSearch(ingredient);
    setQuery(true);
  };

  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Search drinks by ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 mb-2">
          <select
            name="ingredient"
            className="form-control"
            value={ingredient}
            onChange={handleChange}
          >
            <option value="">-- Select Ingredient --</option>
            {ingredients.map((ing) => (
              <option value={ing.strIngredient1} key={ing.strIngredient1}>
                {ing.strIngredient1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search"
          />
        </div>
        {error ? <Error message="Please select ingredient" /> : null}
      </div>
    </form>
  );
};

export default Form;
