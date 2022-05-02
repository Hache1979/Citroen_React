import React, { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (item, count) => {
    if (ProdIsInCart(item.id)) {
      const newCartArray = cartArray.map(product => {
        if (product.item.id === item.id) {
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

  const TotalPrice = () => {
    const totalFinal = cartArray.reduce((acc, curr) => acc + curr.item.precio * curr.count, 0);
    return totalFinal;
  }
  
  const validateName = (name) => {
    const re = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    return re.test(String(name).toLowerCase());
  }
  
  const phoneValidation = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone).toLowerCase());
  }

  const validateMail = (mail) => {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    ProdIsInCart,
    ProductCount,
    TotalPrice,
    validateName,
    phoneValidation,
    validateMail,
  };


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

