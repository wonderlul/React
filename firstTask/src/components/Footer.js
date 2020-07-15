import React from "react";
import Paragraph from "./Paragraph";

function Footer() {
  return (
    <footer className="jumbotron">
      <div className="container">
        <Paragraph>
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
        </Paragraph>
        <Paragraph>
          New to Bootstrap?
          <a href="https://getbootstrap.com/"> Visit the homepage</a>
        </Paragraph>
      </div>
    </footer>
  );
}

export default Footer;
