import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => {
    switch (props.type) {
      case "start":
        if (props.status) {
          return "red";
        } else {
          return "chartreuse";
        }

      case "reset":
        return "honeydew";
    }
  }};
  flex-basis: 30%;
  height: 5vh;
`;
