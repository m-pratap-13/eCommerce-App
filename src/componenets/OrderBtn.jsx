import React from "react";

function OrderBtn({width}) {
  return (
    <button className={`mt-3 ${width} p-2 bg-orange-500 text-white font-semibold rounded-lg transition cursor-pointer hover:bg-amber-400`}>
      ORDER
    </button>
  );
}

export default OrderBtn;
