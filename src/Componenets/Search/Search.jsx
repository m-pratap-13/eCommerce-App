import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ContextAPI/ProductsContext";
import SearchCard from "./SearchCard"

function Search() {
  const { query } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

useEffect(()=>{
  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data)=>setProducts(data.products));
    
},[query])





  return <>
    <div className=" md:mt-25 p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen">
    {products?.map((product)=> <SearchCard key={product.id} product={product}/>)}
      </div>
  
  </>;
}

export default Search;
