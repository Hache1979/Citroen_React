import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]);

    const addToCart = (item, count) => {
      console.log(`${item.nombre} has been added to the cart. Quantity: ${count}.`);
      const newProduct = {
        item: item,
        count
      };
      setCartArray([...cartArray, newProduct]);
    }   

    const removeItem = (item) => {
      const newCartArray = cartArray.filter(cartItem => cartItem.item.id !== item.id);
      setCartArray(newCartArray);
    }

    const clearCart = () => {
      setCartArray([]);
    }

    const lookupItem = (item) => {
      return cartArray.some(cartItem => cartItem.item.id === item.id);
    }

    const value = {
        cartArray,
        addToCart,
        removeItem,
        clearCart,
        lookupItem
    };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

