import React from "react";
import {
  Container,
  HeaderBig,
  Catalog,
} from "pages/CatalogPage/CatalogPage.styles";
import ColumnLeft from "pages/CatalogPage/components/ColumnLeft/ColumnLeft";
import ColumnRight from "pages/CatalogPage/components/ColumnRight/ColumnRight";

import { useSelector } from "react-redux";

const CatalogPage = () => {
  const products = useSelector((state) => state.products.items);
  const FETCH_STATUS = useSelector((state) => state.products.FETCH_STATUS);

  return (
    <Container>
      <HeaderBig>Catalog</HeaderBig>

      {FETCH_STATUS === "DONE" && (
        <Catalog>
          <ColumnLeft />
          <ColumnRight products={products} />
        </Catalog>
      )}
    </Container>
  );
};
export default CatalogPage;
