import React from 'react';
 import image1 from '../../../images/breakfast/breakfast1.png';
 import image2 from '../../../images/breakfast/breakfast2.png';
 import image3 from '../../../images/breakfast/breakfast3.png';
 import image4 from '../../../images/breakfast/breakfast4.png';
 import image5 from '../../../images/breakfast/breakfast5.png';
 import image6 from '../../../images/breakfast/breakfast6.png';
 import BreakFastFood from './BreakFastFood';
const BreakFast = () => {
    const breakFastFoods=[
        {id:1,name:'Indian breakfast',price:125,img:image1},
        {id:2,name:'Bangladesh breakfast',price:130,img:image2},
        {id:3,name:'Nepal breakfast',price:200,img:image3},
        {id:4,name:'Thai breakfast',price:127,img:image4},
        {id:5,name:'Korian breakfast',price:129,img:image5},
        {id:6,name:'Singapur breakfast',price:160,img:image6}
    ]
    return (
        <div className='row text-center'>
            {
                breakFastFoods.map(breakFastFood=><BreakFastFood
                key={breakFastFood.id}
                breakFastFood={breakFastFood}
                ></BreakFastFood>)
            }
        </div>
    );
};

export default BreakFast;