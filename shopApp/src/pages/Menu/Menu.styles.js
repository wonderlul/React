import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.nav`
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: #0b102b;
`;

export const Container = styled.div`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
export const NavItem = styled.li`
  flex-basis: 10%;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 100;
  padding: 15px 35px;
  color: #fff;

  text-decoration: none;
`;

export const Icon = styled(FontAwesomeIcon)``;

export const Cart = styled.div`
  margin-left: 16%;
  font-size: 16px;
  font-weight: 100;
  padding: 15px 35px;
  color: #fff;
  text-decoration: none;
`;

export const CartStatus = styled.span`
  display: inline-block;
  padding: 0 5px;
  color: yellowgreen;
`;
