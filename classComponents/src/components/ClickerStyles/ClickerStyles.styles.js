import styled from "styled-components";

const Button = styled.button.attrs(() => ({
  className: `px-8 rounded-r-lg font-bold p-4 uppercase border-t border-b border-r" `,
}))`
  background-color: rgb(34, 88, 105);
  color: white;

  &:hover {
    background-color: rgb(93, 188, 210);
  }
`;

export default Button;
