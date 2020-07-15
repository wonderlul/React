import React from "react";
import {
  Container,
  Counter,
} from "../../components/ClickerStyles/ClickerStyles";

class ClickerApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.count % 2 === 0;
  }
  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <Container>
        <Counter count={count} increment={this.increment} />
      </Container>
    );
  }
}

export default ClickerApp;
