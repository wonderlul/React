import React from "react";
import {
  Container,
  Filter,
  InputContainer,
  Header,
} from "pages/CatalogPage/components/ColumnLeft/ColumnLeft.styles";
import InputField from "pages/CatalogPage/components/InputField/InputField";
import Search from "pages/CatalogPage/components/Search/Search";

const ColumnLeft = () => {
  return (
    <Container>
      <Filter>
        <Search />
        <Header>Manufacturer</Header>
        <InputContainer>
          <InputField id="All" manufacturer="All" />
          <InputField id="Apple" manufacturer="Apple" />
          <InputField id="Dell" manufacturer="Dell" />
        </InputContainer>
      </Filter>
    </Container>
  );
};
export default ColumnLeft;
