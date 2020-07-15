import React from "react";
import { Time } from "../ClockStyles/ClockStyles";
import { faClock } from "@fortawesome/free-regular-svg-icons";

class Clock extends React.Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <Time icon={faClock} app="">
        {time.toTimeString()}
      </Time>
    );
  }
}

export default Clock;
