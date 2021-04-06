import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ProductsContextProvider from './context/productContext';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </StrictMode>,
  rootElement
);
