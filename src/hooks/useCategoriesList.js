import { useEffect, useState } from "react";

function useCategoriesList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);
  return list;
}

export default useCategoriesList;
