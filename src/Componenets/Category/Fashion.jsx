import React, { useEffect, useState } from 'react'
import FashionCard from './FashionCard';
import FashionHeroSection from './FashionHeroSection';

function Fashion() {
const [menShirt, setMenShirt] = useState([]);
const [top, setTop] = useState([]);
const [sunglasses,setSunglasses] = useState([])
const [mensWatches,setMensWatches] = useState([])
const [womensWatches,setWomensWatches] = useState([])
const [womensDresses,setWomensDresses] = useState([])
const [mensShoes,setMensShoes] = useState([])
const [womensBags,setWomensBags] = useState([])

useEffect(()=>{
    fetch('https://dummyjson.com/products/category/mens-shirts')
    .then(res => res.json())
    .then((data)=>{
        setMenShirt(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/tops')
    .then(res => res.json())
    .then((data)=>{
        setTop(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/sunglasses')
    .then(res => res.json())
    .then((data)=>{
        setSunglasses(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/mens-watches')
    .then(res => res.json())
    .then((data)=>{
        setMensWatches(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/womens-watches')
    .then(res => res.json())
    .then((data)=>{
        setWomensWatches(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/womens-dresses')
    .then(res => res.json())
    .then((data)=>{
        setWomensDresses(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/mens-shoes')
    .then(res => res.json())
    .then((data)=>{
        setMensShoes(data.products)
    });
 },[])

 useEffect(()=>{
    fetch('https://dummyjson.com/products/category/womens-bags')
    .then(res => res.json())
    .then((data)=>{
        setWomensBags(data.products)
        console.log(data.products)
    });
 },[])



  return (
    <>
    <FashionHeroSection/>
    <div className=' m-5 p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen'>
    {menShirt.map((product)=><FashionCard key={product.id} product={product}/>)}
    {top.map((product)=><FashionCard key={product.id} product={product}/>)}
    {sunglasses.map((product)=><FashionCard key={product.id} product={product}/>)}
    {mensWatches.map((product)=><FashionCard key={product.id} product={product}/>)}
    {womensWatches.map((product)=><FashionCard key={product.id} product={product}/>)}
    {womensDresses.map((product)=><FashionCard key={product.id} product={product}/>)}
    {mensShoes.map((product)=><FashionCard key={product.id} product={product}/>)}
    {womensBags.map((product)=><FashionCard key={product.id} product={product}/>)}
    
    
    </div>
    </>
  )
}

export default Fashion