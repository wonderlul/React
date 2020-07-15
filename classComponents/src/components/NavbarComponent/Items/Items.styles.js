import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink).attrs(() => ({
  className: `block px-4 py-1 md:p-2 lg:px-4 md:text-lg lg:text-xl transition duration-200 `,
}))`
  color: rgb(34, 88, 105);
  border-bottom: 2px solid rgba(93, 188, 210, 0);
  &:hover {
    color: rgb(93, 188, 210);
    border-bottom: 2px solid rgba(93, 188, 210, 0.5);
  }
`;
