import React from "react";
import {
  Container,
  Products,
} from "pages/CatalogPage/components/ColumnRight/ColumnRight.styles";
import Item from "components/Item/Item";

import { useSelector } from "react-redux";

const ColumnRight = ({ products }) => {
  const currentInput = useSelector((state) => state.search.inputValue);
  const currentBrand = useSelector((state) => state.search.brand);

  let filteredProducts;

  if (currentBrand === "All") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.manufacture === currentBrand
    );
  }
  return (
    <Container>
      <Products>
        {filteredProducts
          .filter((product) =>
            product.name.toLowerCase().includes(currentInput)
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
    </Container>
  );
};
export default ColumnRight;
