import React, { useContext } from 'react';
import { ProductsContext } from '../../context/productContext';
import ProductItems from './productItems';

import { Grid, Typography, InputBase, Button } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  button: {
    '&:hover': {
      outline: 'none'
    }
  }
}));

const ProductGrid = () => {
  const classes = useStyles();
  const { products, handleSearch, search, setSearch } = useContext(
    ProductsContext
  );
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={8}>
          <Typography variant="body2" display="block" gutterBottom>
            {products.length} Products
          </Typography>
        </Grid>
        <Grid item style={{ position: 'relative' }} xs={4}>
          <form onSubmit={handleSearch}>
            <input
              style={{
                width: '-webkit-fill-available',
                height: '2rem',
                background: '#f7f7f9',
                border: 'none',
                paddingLeft: '1rem'
              }}
              className={classes.input}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="search brands Nike/Zara/Puma..."
            />
            <button
              className={classes.button}
              style={{
                position: 'absolute',
                right: '0.2rem',
                background: 'none',
                top: '0.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
              type="submit">
              <SearchIcon />
            </button>
          </form>
        </Grid>
      </Grid>
      <Grid container>
        {products.map((product) => {
          return (
            <Grid item xs={4}>
              <ProductItems key={product.id} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductGrid;
