import React from "react";
import {
  SearchContainer,
  SearchInput,
  SearchNav,
  Header,
  Input,
  Clear,
} from "pages/CatalogPage/components/Search/Search.styles";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "actions";

const Search = () => {
  const currentInput = useSelector((state) => state.search.inputValue);

  const dispatch = useDispatch();

  const clearFilter = (e) => {
    e.preventDefault();
    dispatch(actions.clearFilter());
  };
  const setInput = (data) => dispatch(actions.setInput(data));

  return (
    <SearchContainer>
      <SearchNav>
        <Header>Search</Header>
        <Clear href="#" onClick={clearFilter}>
          Clear
        </Clear>
      </SearchNav>
      <SearchInput>
        <Input
          value={currentInput}
          type="text"
          placeholder="search..."
          onChange={(e) => setInput(e.target.value)}
        />
      </SearchInput>
    </SearchContainer>
  );
};

export default Search;
