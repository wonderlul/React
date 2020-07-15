import React from "react";
import Clock from "../../components/ClockComponent/Clock";
import {
  Container,
  ClockContainer,
} from "../../components/ClockStyles/ClockStyles";
import { Button } from "./ClockApp.styles";

class ClockApp extends React.Component {
  state = {
    showClock: true,
  };

  toggle = () => {
    this.setState((state) => ({
      showClock: !state.showClock,
    }));
  };

  render() {
    const { showClock } = this.state;
    return (
      <Container>
        <Button onClick={this.toggle}>Show/hide</Button>
        <ClockContainer> {showClock && <Clock />}</ClockContainer>
      </Container>
    );
  }
}

export default ClockApp;
