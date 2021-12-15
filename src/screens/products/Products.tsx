import React, { useState, useEffect } from 'react';
import { Button, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import productsStyle from './products-styles';
import ProductsService from '../../services/ProductService';
import ProductItem from '../../components/ProductItem';


const Products = () => {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const classes = productsStyle();
  const onClickButton = () => {
    navigate('details');
  };

  React.useEffect(() => {
    async function asyncCall() {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    }
    asyncCall()
  }, [])

  if (products.length === 0) {
    return (
      <div className={classes.loaderContainer}>
        <LinearProgress className={classes.loader} />
      </div>
    );
  }

  return (
    <div>
      <h1 className={classes.title}>Soy la página de productos</h1>
      <div className={classes.productsContainer}>
        {products.map((item) => {
          return <ProductItem product={item} />;
        })}
      </div>
      <Button className={classes.details} onClick={onClickButton}>Ve a la página de detalles</Button>
    </div>
  );
};

export default Products;


