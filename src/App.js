import './styles.css';
import StoreFront from './components/store/store';
import { Container } from '@material-ui/core';
import Navbar from './components/store/navbar';
import CartProducts from './components/cart/cartProducts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Container>
      <Router>
        <Navbar>
          <Route exact path="/" component={StoreFront} />
          <Route path="/cart" component={CartProducts} />
        </Navbar>
      </Router>
    </Container>
  );
}
