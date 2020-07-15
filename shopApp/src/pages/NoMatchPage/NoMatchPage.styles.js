import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  display: block;
  margin: auto;
  position: relative;
`;

export const LinkContainer = styled.div`
  text-align: center;
`;

export const Link = styled(NavLink)``;
