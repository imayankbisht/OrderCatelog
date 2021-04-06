import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ProductsContext } from '../../context/productContext';
import { Link as Links } from 'react-router-dom';

const MyLink = styled(Link)({
  color: 'black',
  margin: '0 2em'
});

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  },
  storeHeading: {
    marginTop: '4em',
    marginBottom: 0,
    textAlign: 'center'
  },
  storeTitle: {
    textAlign: 'center'
  },
  links: {
    color: 'black',
    textDecoration: 'none'
  }
}));

export default function Navbar({ children }) {
  const { cartItems } = React.useContext(ProductsContext);
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Typography className={classes.root}>
        <MyLink href="#" onClick={preventDefault}>
          <Links className={classes.links} to="/">
            Store
          </Links>
        </MyLink>
        <MyLink href="#" onClick={preventDefault}>
          About
        </MyLink>
        <MyLink onClick={preventDefault}>
          <Links className={classes.links} to="/cart">
            Cart({cartItems.length}){' '}
          </Links>
        </MyLink>
      </Typography>
      {children}
    </>
  );
}
