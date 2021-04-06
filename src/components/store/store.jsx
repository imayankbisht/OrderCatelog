import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductGrid from './productGrid';

const useStyles = makeStyles((theme) => ({
  storeHeading: {
    marginTop: '4em',
    marginBottom: 0,
    textAlign: 'center'
  },
  storeTitle: {
    textAlign: 'center'
  }
}));

export default function StoreFront({ children }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.storeHeading}>
        <Typography variant="h4" gutterBottom>
          STORE{' '}
        </Typography>{' '}
      </div>
      <div className={classes.storeTitle}>
        <Typography variant="overline" gutterBottom>
          This is a store page.
        </Typography>
      </div>
      <div>
        <ProductGrid />
      </div>
    </>
  );
}
