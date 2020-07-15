import React from "react";
import Button from "./ClickerStyles.styles";

export const Counter = ({ count, increment }) => {
  return (
    <>
      <div className="inline-block w-1/5 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white">
        {count}
      </div>
      <Button onClick={increment}>increment</Button>
    </>
  );
};

export const Container = ({ children }) => {
  return (
    <section className="text-gray-700 body-font ">
      <div className="container px-5 py-12 mx-auto">
        <div className="xl:w-11/12 lg:w-3/4 w-full mx-auto text-center">
          {children}
        </div>
      </div>
    </section>
  );
};
