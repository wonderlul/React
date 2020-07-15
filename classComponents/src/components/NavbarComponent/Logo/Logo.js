import React from "react";

import logo from "../../../images/logo.jpg";

const Logo = () => {
  return (
    <div className="mr-4 md:mr-8">
      <img className="h-20 xl:h-32  mr-2" src={logo} alt=""></img>
    </div>
  );
};

export default Logo;
