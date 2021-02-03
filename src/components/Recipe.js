import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { RecipesContext } from '../context/Recipes';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      maxHeight: '100%',
      padding: theme.spacing(2.5, 2.5, 2.5),
    },
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    maxHeight: '100vh',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
  },
}));

const Recipe = ({ open, setOpen }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const { setIdDrink, recipe } = useContext(RecipesContext);

  const handleClose = () => {
    setOpen(false);
  };

  const showIngredientsAndMeasures = (details) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (details[`strIngredient${i}`]) {
        ingredients.push(
          <li key={details[`strIngredient${i}`] + details[`strMeasure${i}`]}>
            {details[`strIngredient${i}`]} - {details[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setIdDrink(null);
        handleClose();
      }}
    >
      <div style={modalStyle} className={`scroll ${classes.paper}`}>
        <h2>{recipe.strDrink}</h2>
        <p>{recipe.strInstructions}</p>
        {recipe.strDrinkThumb ? (
          <img
            src={recipe.strDrinkThumb}
            alt={recipe.strDrink}
            className="img-fluid my-4"
          />
        ) : null}
        <ul>{showIngredientsAndMeasures(recipe)}</ul>
      </div>
    </Modal>
  );
};

Recipe.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Recipe;
