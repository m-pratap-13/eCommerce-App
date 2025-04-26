import React from "react";

function Container({ children }) {
  return <div className="bg-gray-200 p-3 flex flex-row flex-wrap justify-center  gap-4 md:pt-2 h-auto ">{children}</div>;
}

export default Container;
