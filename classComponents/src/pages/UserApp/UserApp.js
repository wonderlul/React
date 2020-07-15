import React from "react";
import UserInfo from "../../components/UserComponent/UserInfo";

import { Container } from "../../components/UserStyles/UserStyles";
import { Button } from "./UserApp.styles";

const FETCH_STATUS = {
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error",
};

class UserApp extends React.Component {
  state = {
    user: null,
    status: FETCH_STATUS.LOADING,
  };

  async fetchData() {
    try {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      const [user] = results;

      this.setState({
        user,
        status: FETCH_STATUS.LOADED,
      });
    } catch (error) {
      this.setState({
        user: null,
        status: FETCH_STATUS.ERROR,
      });
    }
  }

  async componentDidMount() {
    await this.fetchData();
  }

  refresh = async () => {
    await this.fetchData();
  };
  render() {
    const { user, status } = this.state;

    if (status === FETCH_STATUS.ERROR) {
      return (
        <Container>
          <h3>Something went wrong...</h3>
        </Container>
      );
    }

    if (status === FETCH_STATUS.LOADING) {
      return (
        <Container>
          <h3>Data loading...</h3>
        </Container>
      );
    }

    return (
      <Container>
        <UserInfo user={user} />
        <Button onClick={this.refresh}>Refresh</Button>
      </Container>
    );
  }
}

export default UserApp;
