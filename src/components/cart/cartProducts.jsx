import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CardMedia, Typography, Button } from '@material-ui/core';
import { ProductsContext } from '../../context/productContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex'
  },
  storeHeading: {
    marginTop: '4em',
    marginBottom: 0,
    textAlign: 'center'
  },
  storeTitle: {
    textAlign: 'center'
  },
  media: {
    margin: '0 auto',
    width: '28%',
    height: '100%'
  },
  quantity: {
    padding: 10
  },
  top: {
    marginTop: theme.spacing(3)
  }
}));

export default function CartProducts() {
  const {
    cartItems,
    onAdd,
    onRemove,
    setCartItems,
    setCheckout,
    checkout
  } = useContext(ProductsContext);
  const classes = useStyles();
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <>
      <div className={classes.storeHeading}>
        <Typography variant="h4" gutterBottom>
          CART{' '}
        </Typography>{' '}
      </div>
      <div className={classes.storeTitle}>
        <Typography variant="overline" gutterBottom>
          This is a cart page.
        </Typography>
      </div>
      <Grid className={classes.root} conatiner>
        <Grid item xs={8}>
          {cartItems.length < 1 || checkout ? (
            <div>
              <Typography variant="h6">
                {checkout ? 'Checkout successfull' : 'Your Cart is Empty'}{' '}
              </Typography>
              <div>
                <Button variant="contained" color="secondary">
                  <Link
                    onClick={() => setCheckout(false)}
                    style={{ textDecoration: 'none', color: 'white' }}
                    to="/">
                    Buy More
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <Grid className={classes.top} container>
                  <Grid item xs={3}>
                    <CardMedia
                      className={classes.media}
                      image={item.photo + '?v=' + item.id}
                      title="Contemplative Reptile"
                    />{' '}
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">Price:{item.price}</Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.quantity}>
                    <Typography variant="body1">Qty:{item.qty}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      onClick={() => onAdd(item)}
                      variant="contained"
                      color="primary"
                      className={classes.button}>
                      <AddIcon />
                    </Button>
                    <Button
                      onClick={() => onRemove(item)}
                      variant="contained"
                      color="secondary"
                      className={classes.button}>
                      <RemoveIcon />
                    </Button>
                  </Grid>
                </Grid>
              );
            })
          )}
        </Grid>
        {cartItems.length > 0 && (
          <Grid xs={4}>
            <Typography variant="h6">Total Items</Typography>
            <Typography variant="body1">{cartItems.length}</Typography>
            <Typography variant="h6">Total Payment</Typography>
            <Typography variant="body1">{itemPrice.toFixed(2)}</Typography>
            <hr />
            <Button
              onClick={() => {
                setCheckout(true);
                setCartItems([]);
              }}
              size="large"
              variant="contained"
              color="secondary">
              CHECKOUT
            </Button>
            <Button
              onClick={() => {
                setCartItems([]);
                setCheckout(false);
              }}>
              CLEAR
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
}
