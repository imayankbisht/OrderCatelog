import React, { createContext, useState } from 'react';
import { dummyProducts } from '../dummyData';
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(dummyProducts);
  const [cartItems, setCartItems] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [search, setSearch] = useState('');

  console.log(search);

  const handleSearch = async (e) => {
    e.preventDefault();
    const filterSearch = await products.filter((item) => {
      return item.brand === search;
    });
    console.log(filterSearch);
    setProducts(filterSearch);
  };

  const onAdd = (product) => {
    console.log(product);
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: +1
        }
      ]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        setCheckout,
        checkout,
        setSearch,
        search,
        handleSearch
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
