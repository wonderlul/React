import styled from "styled-components";

export const AppIcon = styled.div.attrs({
  className: `flex-shrink-0 w-24 h-24  rounded-full inline-flex items-center justify-center`,
})`
  color: rgb(34, 88, 105);
  background-color: rgb(93, 188, 210);
`;

export const ListDecorationLine = styled.div.attrs({
  className: `h-full w-1 bg-gray-200 pointer-events-none`,
})`
  background-color: rgb(93, 188, 210);
`;

export const ListDecoration = styled.div.attrs({
  className: `flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm`,
})`
  background-color: rgb(34, 88, 105);
`;
