import React, { useEffect, useState } from 'react';

const Useproducts = () => {
    const [products,setProducts]=useState([]);
    // console.log(products)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])
    return [products,setProducts];
};

export default Useproducts;