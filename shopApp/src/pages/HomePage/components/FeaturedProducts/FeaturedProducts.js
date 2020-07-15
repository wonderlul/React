import React from "react";
import { Products } from "pages/HomePage/components/FeaturedProducts/FeaturedProducts.styled";
import Item from "components/Item/Item";

// import CircularProgress from "@material-ui/core/CircularProgress";

const FeaturedProducts = ({ products, category }) => {
  return (
    <Products>
      {products
        .filter(
          (product) =>
            product.featured === true && product.category === category
        )
        .map((product) => (
          <Item
            key={product.id}
            poster={product.image}
            price={product.amount}
            name={product.name}
            id={product.id}
          />
        ))}
    </Products>
  );
};

export default FeaturedProducts;
