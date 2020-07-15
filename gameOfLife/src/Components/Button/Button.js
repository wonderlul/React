import React from "react";

import { Button } from "./Button.styles.js";

function ButtonModule({ type, onClick, status }) {
  const content = (() => {
    switch (type) {
      case "start":
        if (status) {
          return "Stop";
        } else {
          return "Start";
        }

      case "reset":
        return "Reset";
    }
  })();
  return (
    <Button type={type} onClick={onClick} status={status}>
      {content}
    </Button>
  );
}

export default ButtonModule;
