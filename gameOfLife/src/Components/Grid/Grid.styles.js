import styled from "styled-components";

export const Grid = styled.div`
  margin: 1vh auto;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 500px;
`;

export const Cell = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => {
    switch (props.type) {
      case 0:
        return "lightblue";
      case 1:
        return "black";
    }
  }};

  flex-basis: 10px;
  height: 10px;
  border: 1px solid black;
`;
