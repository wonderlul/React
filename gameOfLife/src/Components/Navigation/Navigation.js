import React from "react";

import ButtonModule from "../Button/Button";

import { Navigation, Counter } from "./Navigation.styles.js";

function NavigationModule({ status, statusHandler, resetHandler, counter }) {
  return (
    <Navigation>
      <Counter>Generation: {counter}</Counter>
      <ButtonModule
        type="start"
        status={status}
        onClick={() => statusHandler(status)}
      />
      <ButtonModule type="reset" onClick={() => resetHandler()} />
    </Navigation>
  );
}

export default NavigationModule;
