import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductsContext } from '../../context/productContext';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    padding: 20,
    maxWidth: '80%'
  },
  media: {
    height: 400
  },
  cardactions: {
    justifyContent: 'flex-end',
    '& Button': {
      color: 'black'
    }
  }
});

export default function ProductItems({ key, product }) {
  const { onAdd } = useContext(ProductsContext);
  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(number);
  };
  const classes = useStyles();

  return (
    <Card key={key} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.photo + '?v=' + product.id}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {product.name}{' '}
          </Typography>
          <Typography
            style={{ paddingTop: '1rem' }}
            gutterBottom
            variant="h5"
            component="h2">
            {formatNumber(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardactions}>
        <Button size="small" color="primary">
          DETAILS{' '}
        </Button>
        <Button
          onClick={() => {
            onAdd(product);
          }}
          size="small"
          color="primary">
          ADD TO CART{' '}
        </Button>
      </CardActions>
    </Card>
  );
}
