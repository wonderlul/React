import React from "react";
import Item from "components/Item/Item";
import { Container, Products, HeaderBig } from "pages/CartPage/CartPage.styles";

import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <Container>
      <HeaderBig>CART</HeaderBig>
      <Products>
        {products.map((product) => (
          <Item
            key={product.id}
            poster={product.poster}
            price={product.price}
            name={product.name}
            id={product.id}
          />
        ))}
      </Products>
    </Container>
  );
};

export default CartPage;
