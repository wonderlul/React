import styled from "styled-components";

export const Item = styled.div`
  margin: 0.5%;
  box-sizing: border-box;
  background-color: ${(props) => {
    switch (props.type) {
      case "X":
        return "lightblue";
      case "Y":
        return "plum";
      case "0":
        return "floralwhite";
      case "Ball":
        return "darksalmon";
    }
  }};

  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
`;
