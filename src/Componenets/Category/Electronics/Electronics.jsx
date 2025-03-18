import React, { useEffect, useState } from 'react'
import HeroSection from '../HeroSection';
import ElectronicsCard from './ElectronicsCard';

function Electronics() {
    const [laptops, setLaptops] = useState([]);
    const [mobileAccessories, setmobileAccessories] = useState([]);
    const [smartphones, setSmartphones] = useState([]);
    const [tablets, setTablets] = useState([]);
    
    useEffect(() => {
      fetch("https://dummyjson.com/products/category/laptops")
        .then((res) => res.json())
        .then((data) => {
          setLaptops(data.products);
        });
    }, []);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products/category/mobile-accessories")
        .then((res) => res.json())
        .then((data) => {
          setmobileAccessories(data.products);
        });
    }, []);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products/category/smartphones")
        .then((res) => res.json())
        .then((data) => {
          setSmartphones(data.products);
        });
    }, []);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products/category/tablets")
        .then((res) => res.json())
        .then((data) => {
          setTablets(data.products);
        });
    }, []);
  

  
    return (
      <>
        <HeroSection/>
        <div className='p-30 flex flex-row flex-wrap justify-center items-center gap-4 md:pt-2 min-h-screen'>
        {laptops.map((product)=><ElectronicsCard key={product.id} product={product}/>)}
        {mobileAccessories.map((product)=><ElectronicsCard key={product.id} product={product}/>)}
        {smartphones.map((product)=><ElectronicsCard key={product.id} product={product}/>)}
        {tablets.map((product)=><ElectronicsCard key={product.id} product={product}/>)}
        </div>
      </>
    )
}

export default Electronics