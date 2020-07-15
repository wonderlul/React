import React from "react";

import Items from "../../components/NavbarComponent/Items/Items";
import Logo from "../../components/NavbarComponent/Logo/Logo";
import Toggle from "../../components/NavbarComponent/Toggle/Toggle";
import NavbarContainer from "../../components/NavbarComponent/NavbarContainer/NavbarContainer";

class Navbar extends React.Component {
  state = {
    isHidden: true,
  };

  setIsHidden = () => {
    this.setState((state) => ({ isHidden: !state.isHidden }));
  };

  render() {
    const { isHidden } = this.state;

    const hiddenClassHandler = ((isHidden) => {
      if (isHidden) {
        return `hidden`;
      }
    })(isHidden);

    return (
      <NavbarContainer>
        <Logo />
        <Toggle isHiddenHandler={this.setIsHidden} />
        <Items isHidden={hiddenClassHandler} />
      </NavbarContainer>
    );
  }
}

export default Navbar;
