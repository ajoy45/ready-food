import React from 'react';

const LunchFood = ({lunchFood}) => {
    const {img,name,price}=lunchFood;
    return (
        <div  className=' col-sm-6 col-md-4'>
             <img width={200} src={img} alt="" />
            <h1>{name}</h1>
            <h2>price:${price}</h2>
            
        </div>
    );
};

export default LunchFood;