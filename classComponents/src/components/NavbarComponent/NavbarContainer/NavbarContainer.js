import React from "react";

const NavbarContainer = ({ children }) => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        {children}
      </div>
    </nav>
  );
};
export default NavbarContainer;
