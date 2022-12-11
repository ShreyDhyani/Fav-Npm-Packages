import React, { useState } from "react";

const Searchbar = ({ ...props }) => {
  return (
    <div className="Searchbar">
      <h2 className="font-bold text-sm text-[#4b5c6b]">
        Search for NPM packages
      </h2>
      <input
        className="border-2 border-[#c3cfd9] w-full rounded  px-3 py-2"
        value={props.input}
        onChange={(e) => {
          props.setInput(e.target.value);
        }}
        placeholder={"reactjs"}
      />
    </div>
  );
};

export default Searchbar;
