import React from "react";
import {
  Container,
  Input,
  Label,
} from "pages/CatalogPage/components/InputField/InputField.styles";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "actions";

const InputField = ({ id, manufacturer }) => {
  const currentBrand = useSelector((state) => state.search.brand);

  const dispatch = useDispatch();

  const setBrand = (data) => {
    dispatch(actions.setBrand(data));
  };

  return (
    <Container>
      <Input
        type="radio"
        name="manufacturere"
        id={id}
        value={manufacturer}
        checked={manufacturer === currentBrand}
        onChange={() => setBrand(manufacturer)}
      />
      <Label htmlFor={id}>{id}</Label>
    </Container>
  );
};

export default InputField;
