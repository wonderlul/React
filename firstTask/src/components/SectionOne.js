import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";

function SectionOne() {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <Title text="Section one" />
        <Paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Paragraph>
        <Paragraph>
          <Button text="Show more"></Button>
        </Paragraph>
      </div>
    </section>
  );
}

export default SectionOne;
