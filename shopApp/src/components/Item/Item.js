import React, { useState } from "react";
import {
  Product,
  ProductImage,
  ProductPrice,
  ProductName,
  AddCartButton,
  RemoveCartButton,
} from "components/Item/Item.styles";

import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import * as actions from "actions";

const Item = (props) => {
  const { poster, price, name, id } = props;

  const location = useLocation().pathname;

  const [isInCart, setIsInCart] = useState(false);

  const productsInCart = useSelector((state) => state.cart.products);
  const productIndexInCart = productsInCart.findIndex(
    (product) => product.id === id
  );

  if (!isInCart && productIndexInCart !== -1) {
    setIsInCart(true);
  } else if (isInCart && productIndexInCart === -1) {
    setIsInCart(false);
  }

  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch(actions.addToCart(data));
  };
  const removeFromCart = (product, index) => {
    dispatch(actions.removeFromCart(product, index));
  };

  return (
    <Product>
      <ProductImage src={poster} alt={name} />
      <ProductPrice>${price}</ProductPrice>
      <ProductName>{name}</ProductName>
      {location !== "/cart" && (
        <AddCartButton
          onClick={() => {
            addToCart(props);
            setIsInCart(true);
          }}
        >
          ADD TO CART
        </AddCartButton>
      )}
      {isInCart && (
        <RemoveCartButton
          onClick={() => {
            removeFromCart(props, productIndexInCart);
            setIsInCart(false);
          }}
        >
          REMOVE FROM CART
        </RemoveCartButton>
      )}
    </Product>
  );
};

export default Item;
