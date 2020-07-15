import React from "react";

import PageNotFound from "mocks/404.png";

import {
  Container,
  Image,
  Link,
  LinkContainer,
} from "pages/NoMatchPage/NoMatchPage.styles";

const NoMatchPage = () => (
  <Container>
    <Image src={PageNotFound} alt="not found" />
    <LinkContainer>
      <Link to="/">Return to Home Page</Link>
    </LinkContainer>
  </Container>
);

export default NoMatchPage;
