import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  AppIcon,
  ListDecorationLine,
  ListDecoration,
} from "./DisplayAppComponent.styles";

export const DisplayApp = ({ icon, app, children }) => {
  return (
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <ListDecorationLine />
      </div>
      <ListDecoration />
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <AppIcon>
          <FontAwesomeIcon icon={icon} class="w-12 h-12" />
        </AppIcon>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
            {app}
          </h2>
          <p className="leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
};

export const DisplayAppContainer = ({ children }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5  mx-auto flex flex-wrap">{children}</div>
    </section>
  );
};
