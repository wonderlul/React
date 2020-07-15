import styled from "styled-components";

export const Button = styled.button.attrs({
  className: "text-white font-bold py-2 px-4 rounded",
})`
  background-color: rgb(34, 88, 105);

  &:hover {
    background-color: rgb(93, 188, 210);
  }
`;
export default Button;
