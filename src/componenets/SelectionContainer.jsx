import React from "react";
import SelectionBox from "./SelectionBox";

function SelectionContainer() {
  return (
    <div className="bg-red-50 py-6 px-4 sm:px-6 lg:px-10 m-5  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <SelectionBox section='Best Quality'/>
      <SelectionBox section='Recommended Items'/>
      <SelectionBox section='More to Explore'/>
    </div>
  );
}

export default SelectionContainer;
