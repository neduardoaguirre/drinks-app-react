import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import DrinksListing from './components/DrinksListing';

import IngredientsProvider from './context/Ingredients';
import DrinksProvider from './context/Drinks';
import RecipesProvider from './context/Recipes';

function App() {
  return (
    <IngredientsProvider>
      <DrinksProvider>
        <RecipesProvider>
          <Header title="Drinks App" />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <DrinksListing />
          </div>
        </RecipesProvider>
      </DrinksProvider>
    </IngredientsProvider>
  );
}

export default App;
