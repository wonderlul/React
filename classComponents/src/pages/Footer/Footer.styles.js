import styled from "styled-components";
import tw from "tailwind.macro";

const Logo = styled.a.attrs({
  className:
    "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
})`
  @import url("https://fonts.googleapis.com/css2?family=Solway:wght@800&display=swap");
  font-family: "Solway";
  & {
    span {
      ${tw`ml-3 text-2xl`}
    }
  }
`;

export default Logo;
