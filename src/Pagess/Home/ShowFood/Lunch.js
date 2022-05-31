import React from 'react';
import image1 from '../../../images/lunch/lunch1.png';
 import image2 from '../../../images/lunch/lunch2.png';
 import image3 from '../../../images/lunch/lunch3.png';
 import image4 from '../../../images/lunch/lunch4.png';
 import image5 from '../../../images/lunch/lunch5.png';
 import image6 from '../../../images/lunch/lunch6.png';
import LunchFood from './LunchFood';
const Lunch = () => {
    const lunchFastFoods=[
        {id:1,name:'Indian Lunch',price:399,img:image1},
        {id:2,name:'Bangladesh Lunch',price:199,img:image2},
        {id:3,name:'Nepal Lunch',price:239,img:image3},
        {id:4,name:'Thai Lunch',price:499,img:image4},
        {id:5,name:'Korian Lunch',price:697,img:image5},
        {id:6,name:'Singapur Lunch',price:634,img:image6}
    ]
    return (
        <div className='row text-center'>
            {
                lunchFastFoods.map(lunchFood=><LunchFood
                key={lunchFood.id}
                lunchFood={lunchFood}
                ></LunchFood>)
            }
        </div>
    );
};

export default Lunch;