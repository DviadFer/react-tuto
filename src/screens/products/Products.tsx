import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';
import productsStyle from './products-styles'

const Products = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('details');
  };

  const classes = productsStyle();

  return (
    <div>
      <h1 className={classes.title}>Soy la página de productos</h1>
      <div className={classes.counter}>
        <Counter />
      </div>
      <Button className={classes.details} onClick={onClickButton}>Ve a la página de detalles</Button>
    </div>
  );
};

export default Products;
