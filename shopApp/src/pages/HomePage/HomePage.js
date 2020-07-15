import React from "react";
import {
  Container,
  HeaderBig,
  HeaderSmall,
} from "pages/HomePage/HomePage.styles";
import FeaturedProducts from "pages/HomePage/components/FeaturedProducts/FeaturedProducts";

import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const FETCH_STATUS = useSelector((state) => state.products.FETCH_STATUS);

  return (
    <Container>
      <HeaderBig>Welcome to our store</HeaderBig>

      <HeaderSmall>Desktops</HeaderSmall>
      {FETCH_STATUS === "DONE" && (
        <FeaturedProducts products={products} category={"desktop"} />
      )}

      <HeaderSmall>Tablets</HeaderSmall>
      {FETCH_STATUS === "DONE" && (
        <FeaturedProducts products={products} category={"tablet"} />
      )}
    </Container>
  );
};

export default HomePage;
