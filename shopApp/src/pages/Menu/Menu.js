import React from "react";
import {
  Navbar,
  Container,
  NavList,
  NavItem,
  Link,
  Cart,
  Icon,
  CartStatus,
} from "pages/Menu/Menu.styles";

import { useSelector } from "react-redux";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const cart = useSelector((state) => state.cart);

  const { quantity, amount } = cart;

  return (
    <Navbar>
      <Container>
        <NavList>
          <NavItem>
            <Link exact to="/" activeStyle={{ fontWeight: "bold" }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/catalog" activeStyle={{ fontWeight: "bold" }}>
              Catalog
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" activeStyle={{ fontWeight: "bold" }}>
              About
            </Link>
          </NavItem>
          <Cart>
            <Link to="/cart">
              <Icon icon={faShoppingCart} />
            </Link>
            Items in your cart: <CartStatus>{quantity}</CartStatus> Total cost:{" "}
            <CartStatus>${amount}</CartStatus>
          </Cart>
        </NavList>
      </Container>
    </Navbar>
  );
};

export default Menu;
