import React from "react";

function Container({ children }) {
  return <div className="bg-gray-200 p-3 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">{children}</div>;
}

export default Container;
