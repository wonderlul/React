import React from "react";

import { NavigationLink } from "./Items.styles";

const Items = ({ isHidden }) => {
  return (
    <div
      className={`w-full md:w-auto md:flex-grow md:flex md:items-center ${isHidden}`}
    >
      <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
        <li>
          <NavigationLink exact to="/">
            Home
          </NavigationLink>
        </li>
        <li>
          <NavigationLink to="/clock">ClockApp</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/users">UserApp</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/todo">ToDoListApp</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/clicker">ClickerApp</NavigationLink>
        </li>
      </ul>
    </div>
  );
};

export default Items;
