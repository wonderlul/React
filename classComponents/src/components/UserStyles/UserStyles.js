import React from "react";

export const Container = ({ children }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          {children}
        </div>
      </div>
    </section>
  );
};
