import React, { useContext } from "react";

import CounterModule from "../Counter/Counter";
import ButtonModule from "../Button/Button";

import StatusContext from "../../Functions/ReactFunctions/StatusContext";

import { Navigation } from "./Navigation.style.js";

function NavigationModule({
  counter,
  setStartingPositionHandler,
  moveHandler,
  resetHandler,
}) {
  const providerValue = useContext(StatusContext);
  return (
    <Navigation>
      <CounterModule counter={counter} />
      <ButtonModule
        disabled={providerValue.isStartingPosition}
        type="set"
        onClick={setStartingPositionHandler}
      />
      <ButtonModule
        disabled={!providerValue.isStartingPosition || providerValue.trigger}
        type="move"
        onClick={moveHandler}
        status={providerValue.status}
      />
      <ButtonModule type="reset" onClick={resetHandler} />
    </Navigation>
  );
}

export default NavigationModule;
