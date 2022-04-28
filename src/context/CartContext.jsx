import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (item, count) => {
    if(ProdIsInCart(item.id)) {
      const newCartArray = cartArray.map(product => {
        if(product.item.id === item.id) {
          product.count += count;
        }
        return product;
      });
      setCartArray(newCartArray);
    } else {
    const newProduct = {
      item: item,
      count: count,
    };
    setCartArray([...cartArray, newProduct]);
    ProductCount();
    }
    
  }

  const deleteItem = (item) => {
    const newCartArray = cartArray.filter(cartItem => (cartItem.item.id !== item.id));
    console.log(newCartArray);
    setCartArray(newCartArray);
  }

  const clearCart = () => {
    setCartArray([]);
  }

  const ProdIsInCart = (id) => {
    return cartArray.some(cartItem => cartItem.item.id === id);
  }

  const ProductCount = () => {
    const total = cartArray.reduce((acc, curr) => acc + curr.count, 0);
    return total;
  }

  const TotalPrice  = () => {
    const totalFinal = cartArray.reduce((acc, curr) => acc + curr.item.precio * curr.count, 0);
    return totalFinal;
  }
  

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    ProdIsInCart,
    ProductCount,
    TotalPrice,
  };

 

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

